import { Router } from "express";
import registerUser from "../controller/auth.controller.js";

const userRouter = Router();

userRouter.post('/register', registerUser)

export default userRouter