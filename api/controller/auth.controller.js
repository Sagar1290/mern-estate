import { User } from "../model/user.model.js";
import { handleError } from "../utils/handleError.js";
import bcrypt from 'bcrypt'

const registerUser = async (req, res, next) => {
    const { fullname, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(handleError(409, "User already exist"));
        }

        const newUser = new User({
            fullname,
            email,
            password: bcrypt.hashSync(password, 10)
        })
        const userData = await newUser.save();
        if (!userData) {
            next(handleError(409, "error saving data in DB"))
        }

        res.status(200).json({ message: "user saved successfully" })
    } catch (error) {
        next(error);
    }
}

const loginUser = (req, res, next) => {

}

export { registerUser, loginUser }