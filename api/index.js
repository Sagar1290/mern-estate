import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from "./routes/user.routes.js";
dotenv.config()

const DB_NAME = "estate";

await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    .then(() => {
        console.log("Connection to DB successful!")
    }).catch((err) => {
        console.log(`Error while connecting to db `);
        throw err
    })

const app = express();
app.use(express.json());
app.use('/api/user', userRouter)

app.listen(8080, () => {
    console.log("server started at 8080")
})