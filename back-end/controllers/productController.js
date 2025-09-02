import Product from "../models/productSchema.js";
import fs from 'fs';
import path from 'path';

//fetches products from the database
export const getProducts = async (req, res) => {
  try {
    const search = req.query.search || "";
    let query = {};

    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: "i" } } // case-insensitive match
        ],
      };
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};


//does the same, only fetches a single product through its ID
// Also to be used in Admin to edit products and it has the same logic.
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

export const getProductsAdmin = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const search = req.query.search || "";
    let query = {};

    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: "i" } }, // case-insensitive
          { description: { $regex: search, $options: "i" } }, // optional: match description too
        ],
      };
    }

    const products = await Product.find(query).skip(skip).limit(limit);
    const total = await Product.countDocuments(query);

    res.json({
      products,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


// ADMIN creating a product

export const uploadProductAdmin = async (req, res) =>{
    try{
        const {name, description, price, image, originalPrice} = req.body;
        const imagePath = req.file ? `/images/${req.file.filename}` : image;

        if(!name || !price || (!req.file && !image) || !originalPrice){
            return res.status(400).json({message: "Please complete required fields!"})
        }

        const newProduct = new Product({
            name,
            description,
            price,
            image: imagePath, 
            originalPrice
        })

        await newProduct.save();
        res.json({ message: "Product created", product: newProduct });
    }
    catch(error){
        console.error("Error Message: ", error);
        res.status(500).json({message: "Server Error"});
    }
}

// ADMIN Delete product function

export const deleteProductAdmin = async (req, res) => {
  try {
    const productToDelete = await Product.findByIdAndDelete(req.params.id);

    if (!productToDelete) {
      return res.status(404).json({ message: "No product found." });
    }

    if (productToDelete.image) { //checks if product has image
      const imagePath = path.join(process.cwd(), productToDelete.image); 

      fs.unlink(imagePath, (err) => { //tries to delete image
        if (err) {
          console.error("Error deleting image file:", err.message);
        }
      });
    }

    return res.status(200).json({ message: "Product and image deleted" });

  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Server error." });
  }
};


export const updateProductAdmin = async (req, res) => {

  try {
    const { name, description, price, image, originalPrice } = req.body;
    const imagePath = req.file ? `/images/${req.file.filename}` : image;

    if (!name || !price || !originalPrice || !description) {
      return res.status(400).json({ message: "Please complete required fields!" });
    }
    console.log(req.body, req.file)

    
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        image: imagePath,
        originalPrice,
      },
      { new: true } // return the updated doc
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product updated", product: updatedProduct });
  } catch (error) {
    console.error("Error Message: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};
