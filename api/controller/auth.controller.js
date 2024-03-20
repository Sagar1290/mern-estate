import { User } from "../model/user.model.js";
import errorHandler from "../utils/errorHandler.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser = async (req, res, next) => {
    const { fullname, email, password, username } = req.body;
    if ([fullname, email, password, username].some((ele) => !ele || ele.trim() === "")) {
        return (next(errorHandler(409, "all fields are cumpolsury")))
    }

    try {
        const existingUser = await User.findOne({ email });
        const sameUsername = await User.findOne({ username })
        if (existingUser) {
            return next(errorHandler(410, "User already exist"));
        }
        if (sameUsername) {
            return next(errorHandler(410, "username already taken"));
        }

        const newUser = new User({
            username,
            fullname,
            email,
            password: bcrypt.hashSync(password, 10)
        })
        const savedUser = await newUser.save();
        if (!savedUser) {
            next(errorHandler(411, "error saving data in DB"))
        }

        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET)
        console.log(token)
        const { password: hashedPassword, ...userData } = savedUser._doc
        console.log(userData)

        res.cookie('access_token', token, { expires: new Date(Date.now() + 8 * 3600000), httpOnly: true })
        res.status(200).json({ message: "user saved successfully", userData })
    } catch (error) {
        next(error);
    }
}

const loginUser = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next(errorHandler(404, "All Fields Required"))
    }

    try {
        const validUser = await User.findOne({ username });
        if (!validUser) {
            return next(errorHandler(412, "No such user exist"))
        }
        const isPasswordCorrect = bcrypt.compareSync(password, validUser.password)
        if (!isPasswordCorrect) {
            return next(errorHandler(413, "Invalid credentials"))
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: hashedPassword, ...userData } = validUser._doc
        console.log(userData)

        res.cookie('access_token', token, { expires: new Date(Date.now() + 8 * 3600000), httpOnly: true })
        res.status(200).json({ message: 'User login successfull', userData })
    } catch (error) {
        return next(error);
    }
}

export { registerUser, loginUser }