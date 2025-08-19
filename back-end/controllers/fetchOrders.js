import Order from "../models/orderSchema.js";


export const getOrders = async (req, res) =>{
    try{
        const orders = await Order.find({});
        res.json(orders);
    } catch(error){
        res.status(500).json({message: 'Failed to fetch products'})
    }
}