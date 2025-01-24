import express from 'express'
import mongoose from 'mongoose'
import Product from '../models/Product.model.js';
import { addproducts, deleteproduct, getproducts, updateproduct } from '../controller/product.controller.js';
const routes=express.Router();

routes.post('/',addproducts);
routes.delete('/:id',deleteproduct);
routes.get('/',getproducts)
routes.put('/:id',updateproduct)

export default routes; 