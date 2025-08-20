import Order from "../models/orderSchema.js";


export const getOrders = async (req, res) =>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const orders = await Order.find().skip(skip).limit(limit);
        const total = await Order.countDocuments();

        res.json({
            orders,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (error){
        res.status(500).json({ message: "Server Error: "});
    }
}