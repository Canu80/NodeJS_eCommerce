import mongoose from 'mongoose';
import { options } from "./config.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(options.mongo.url);
        console.log("Database is connected")
    } catch (error) {
        console.log("Error al tratar deconectar: " + error)
    }
}