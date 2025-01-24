import express from 'express';
import { connectDB } from './config/db.js';
import Product from './models/Product.model.js';
import routes from './routes/product.routes.js';
import path from "path"
import cors from "cors"
const app=express();
app.use(cors())
app.use(express.json())
app.use('/products/',routes)
console.log(process.env.MONGO_URI)
const __dirname=path.resolve();
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}
app.listen(5000,()=>{
    connectDB();
    console.log("server started ")
})
