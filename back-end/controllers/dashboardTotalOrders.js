import Order from "../models/orderSchema.js";

export const dashboardTotalOrders = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments(); 
    res.json({ totalOrders }); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
