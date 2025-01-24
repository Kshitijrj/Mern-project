import Product from "../models/Product.model.js";
export const addproducts=async (req,res)=>{
    const product=req.body;
    console.log(product)
    if(!product.name || !product.price || !product.image){
        res.status(400).json({success:false,message:"please provide all fields value"});
    }
    const newproduct=new Product(product);
    console.log(newproduct)
    try {
        await newproduct.save();
        // console.log("inside")
        res.status(201).json({success:true,data:newproduct})
    } catch (error) {
        console.log("Error in create",error);
        res.status(500).json({success:false,message:"Server error"})
    } 

}

export const deleteproduct=async(req,res)=>{
    const {id}=req.params;
    const new_id=id.trim();
   try {
    console.log(new_id)
    await Product.findByIdAndDelete(new_id)
    res.status(200).json({success:true,message:"deleted"})
   } catch (error) {
    console.log(error);
   }
}

export const getproducts=async(req,res)=>{
    try {
        console.log("he")
        const products=await Product.find({});
        console.log(products)
        res.status(200).json({success:true,data:products})
    } catch (error) {
        console.log(error)
    }
}
export const updateproduct = async (req, res) => {
    const { id } = req.params;
    const new_id = id.trim();
    const product = req.body;
    
    try {
        // Update the product in the database
        const updatedProduct = await Product.findByIdAndUpdate(new_id, product, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        // Return the updated product with a success message
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while updating the product",
        });
    }
};
