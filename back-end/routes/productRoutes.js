import express from 'express';
const productRouter = express.Router();
import {getProducts, getProductById} from '../controllers/productController.js';




router.get('/', getProducts);
router.get('/:id', getProductById);

export default productRouter;