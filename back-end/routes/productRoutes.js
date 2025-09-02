import express from 'express';
const productRouter = express.Router();
import {getProducts, 
        getProductById, 
        getProductsAdmin, 
        uploadProductAdmin, 
        updateProductAdmin,
        deleteProductAdmin} from '../controllers/productController.js';

import upload from '../middleware/uploadMiddleware.js';


// Admin routes first
productRouter.get('/admin', getProductsAdmin);
productRouter.post('/admin/CreateNewProduct', upload.single("image"), uploadProductAdmin);
productRouter.put('/admin/updateProduct/:id', upload.single("image"), updateProductAdmin);
productRouter.delete('/admin/deleteProduct/:id', deleteProductAdmin);



// Then customer-facing routes
productRouter.get('/:id', getProductById);
productRouter.get('/', getProducts);




export default productRouter;