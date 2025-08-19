import express from 'express';
import { getOrders } from '../controllers/fetchOrders.js';

const fetchOrderRouter = express.Router()


fetchOrderRouter.get("/", getOrders);

export default fetchOrderRouter;