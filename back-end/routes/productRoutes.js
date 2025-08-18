import express from 'express';
const productRouter = express.Router();
import {getProducts, getProductById} from '../controllers/productController.js';




productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);

export default productRouter;