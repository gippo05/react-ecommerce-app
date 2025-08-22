import express from 'express';
const productRouter = express.Router();
import {getProducts, getProductById, getProductsAdmin} from '../controllers/productController.js';




productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);

productRouter.get('/admin', getProductsAdmin);

export default productRouter;