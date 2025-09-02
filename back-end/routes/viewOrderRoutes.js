import express from 'express';
import { getOrders, getOrderById } from '../controllers/fetchOrders.js';


const fetchOrderRouter = express.Router()


fetchOrderRouter.get("/", getOrders);
fetchOrderRouter.get("/:id", getOrderById);

export default fetchOrderRouter;