import express from 'express';
const createOrderRouter = express.Router();
import { createOrder } from '../controllers/createOrder';

// import function from ordercontroller

router.post("/", createOrder);

export default createOrderRouter;