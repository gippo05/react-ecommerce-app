import Order from "../models/orderSchema.js";


export const dashboardRevenue = async (req, res) => {

    const result = await Order.aggregate([
    { $group: { _id: null, total: { $sum: "$total" } } }
  ]);
    res.json({ totalSales: result[0]?.total || 0 });
}


export const dashboardTotalOrders = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments(); 
    res.json({ totalOrders }); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
