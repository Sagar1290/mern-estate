import { Router } from "express";
import { registerUser, loginUser, loginWithGoogle } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.post('/google', loginWithGoogle)

export default authRouter