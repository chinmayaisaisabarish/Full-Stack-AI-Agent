import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 2525;
const app = express()

app.use(cors())
app.use(express.json())


mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () =>
            console.log(`Server is running on port ${PORT}`)
        );
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });




































