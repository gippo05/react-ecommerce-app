import express from 'express';
import { dashboardRevenue } from '../controllers/dashboardRevenue.js';

const dashboardRevenueView = express.Router();

dashboardRevenueView.get('/', dashboardRevenue);

export default dashboardRevenueView;