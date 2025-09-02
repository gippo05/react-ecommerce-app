import express from 'express';
const createOrderRouter = express.Router();
import { createOrder } from '../controllers/createOrder.js';


// import function from ordercontroller

createOrderRouter.post("/", createOrder);

export default createOrderRouter;