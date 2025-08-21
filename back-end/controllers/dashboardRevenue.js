import Order from "../models/orderSchema.js";


export const dashboardRevenue = async (req, res) => {

    const result = await Order.aggregate([
    { $group: { _id: null, total: { $sum: "$total" } } }
  ]);
    res.json({ totalSales: result[0]?.total || 0 });
}