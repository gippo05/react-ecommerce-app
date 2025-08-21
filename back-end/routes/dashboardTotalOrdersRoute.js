import express from 'express';
import { dashboardTotalOrders } from "../controllers/dashboardTotalOrders.js";

const dashboardTotalOrderView = express.Router()

dashboardTotalOrderView.get('/', dashboardTotalOrders);

export default dashboardTotalOrderView;