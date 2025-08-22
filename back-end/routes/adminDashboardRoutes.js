import express from 'express';
import { dashboardRevenue, dashboardTotalOrders } from '../controllers/adminDashboard.js';
import { protect } from '../middleware/authMiddleware.js';


const adminDashboard = express.Router();

adminDashboard.get('/', protect, dashboardTotalOrders);
adminDashboard.get('/totalsales', protect, dashboardRevenue)

export default adminDashboard;