import Product from "../models/productSchema.js";

//fetches products from the database
export const getProducts = async (req, res) =>{
    try{
        const products = await Product.find({});
        res.json(products);

         let query = {};
                if (search) {
                query = {
                    $or: [
                    { customerName: { $regex: search, $options: "i" } }, //matches cx name
                    { orderId: { $regex: search, $options: "i" } },     // matches cx order ID
                    { "items.productName": { $regex: search, $options: "i" } }, //matches item searched 
                    ],
                };
                }
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


//ADMIN fetching products

export const getProductsAdmin = async (req, res) =>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const products = await Product.find().skip(skip).limit(limit);
        const total = await Product.countDocuments();

        res.json({
            products,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (error){
        res.status(500).json({ message: "Server Error: "});
    }
}