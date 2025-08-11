import { Products } from '../mockdata/data.js';


export const getProducts = (req, res) =>{
    res.json(Products)
}

export const getProductById = (req, res) =>{
    const product = Products.find(p => p.id === parseInt(req.params.id));
    if(product){
        res.json(product);
    } 
    else {
        res.status(404).json({message: "Product not found."});
    }
};
