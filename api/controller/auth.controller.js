import { User } from "../model/user.model.js";

const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;

    const newUser = new User({
        fullname,
        email,
        password
    })
    const userData = newUser.save();
    if (!userData) {
        res.json({ message: "error saving data" })
    }

    res.json(userData)
}


export default registerUser