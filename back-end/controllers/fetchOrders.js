import Order from "../models/orderSchema.js";


export const getOrders = async (req, res) =>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;
        const search = req.query.search || "";

           let query = {};
                if (search) {
                query = {
                    $or: [
                    { "customer.name": { $regex: search, $options: "i" } },   // customer name
                    { "customer.email": { $regex: search, $options: "i" } },  // customer email
                    { "customer.address": { $regex: search, $options: "i" } },// customer address
                    { paymentMethod: { $regex: search, $options: "i" } },     // payment method
                    { "items.name": { $regex: search, $options: "i" } },      // product name in items
                    ],
                };
                }


                 if (mongoose.Types.ObjectId.isValid(search)) {
                        query.$or.push({ _id: search });
                    }
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
        console.error("Error fetching orders:", error.message);
        res.status(500).json({ message: "Server Error: "});
    }
}