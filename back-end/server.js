import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
import path from 'path';
import createOrderRouter from './routes/orderRoutes.js';
import fetchOrderRouter from './routes/viewOrderRoutes.js';
import dashboardTotalOrderView from './routes/dashboardTotalOrdersRoute.js';
import dashboardRevenueView from './routes/dashboardRevenueViewRoute.js';
import { getProductsAdmin } from './controllers/productController.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

// Middleware
app.use(cors());
app.use(express.json());

const __dirname = path.resolve();
app.use('/images', express.static(path.join(__dirname, '/public/images')));


// Front-end Routes
app.use('/api/products', productRouter);
app.use('/api/submitorder', createOrderRouter);


//Admin Dashboard routes
app.use('/api/orders', fetchOrderRouter);
app.use('/api/dashboard/total-orders', dashboardTotalOrderView);
app.use('/api/dashboard/total-sales', dashboardRevenueView);
app.use('/api/dashboard/products', getProductsAdmin);

// default get
app.get('/', (req, res) => {
  res.send('API is running...');
});



// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
