import mongoose from "mongoose";
import Order from "../models/orderSchema.js";

export const getOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const search = req.query.search || ""; // ✅ pull search from query params

    let query = {};

    if (search) {
      query = {
        $or: [
          { "customer.name": { $regex: search, $options: "i" } },   // match customer name
          { "customer.email": { $regex: search, $options: "i" } },  // match customer email
          { "customer.address": { $regex: search, $options: "i" } },// match address
          { paymentMethod: { $regex: search, $options: "i" } },     // match payment method
          { "items.name": { $regex: search, $options: "i" } },      // match product names in items
        ],
      };

      // Optional: allow searching by exact ObjectId (order ID)
      if (mongoose.Types.ObjectId.isValid(search)) {
        query.$or.push({ _id: search });
      }
    }

    // ✅ Apply query + pagination
    const orders = await Order.find(query).skip(skip).limit(limit);
    const total = await Order.countDocuments(query);

    res.json({
      orders,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};




export const getOrderById = async (req, res) =>{

  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }

};
