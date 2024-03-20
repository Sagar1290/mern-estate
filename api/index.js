import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

import authRouter from "./routes/auth.routes.js";
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

app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.get('/', (req, res) => {
    throw new Error("BROKE!")
})
app.get('/learnErr', (req, res) => {
    res.send("learning error handleing")
})

app.listen(8080, () => {
    console.log("server started at 8080")
})