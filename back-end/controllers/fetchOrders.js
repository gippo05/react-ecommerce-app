import Order from "../models/orderSchema.js";


export const getOrders = async (req, res) =>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;


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