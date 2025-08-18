import Product from "../models/productSchema.js";

//fetches products from the database
export const getProducts = async (req, res) =>{
    try{
        const products = await Product.find({});
        res.json(products);
    } catch(error){
        res.status(500).json({message: 'Failed to fetch products'})
    }
}


//does the same, only fetches a single product through its ID
export const getProductById = async (req, res) =>{
   try{
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message: 'Product not found.'});
    }
   }
   catch(error){
        res.status(500).json({ message: "Error fetching product." });
   }
};
