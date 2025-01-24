import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectDB=async()=>{
    try{
        // console.log("at");
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`db connected : ${conn.connection.host}`);
    }
    catch(err){
        console.log(err)
    }
}