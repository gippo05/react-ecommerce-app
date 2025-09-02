import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

// Import routers
import productRouter from './routes/productRoutes.js';
import createOrderRouter from './routes/orderRoutes.js';
import fetchOrderRouter from './routes/viewOrderRoutes.js';
import adminDashboard from './routes/adminDashboardRoutes.js';
import adminAccess from './routes/adminAcess.js';

const app = express();
const PORT = process.env.PORT || 3000;

// ------------------- Connect to MongoDB -------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ------------------- Middleware -------------------
app.use(cors());
app.use(express.json());

// Serve images statically
const __dirname = path.resolve();
app.use('/images', express.static(path.join(__dirname, '/public/images')));

// ------------------- API Routes -------------------

// Product routes (both frontend & admin)
app.use('/api/products', productRouter);

// Order submission
app.use('/api/submitorder', createOrderRouter);

// Admin authentication (register/login)
app.use('/api/admin', adminAccess);

// Admin dashboard routes
app.use('/api/orders', fetchOrderRouter);
app.use('/api/dashboard', adminDashboard);

// ------------------- Default Route -------------------
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ------------------- Start Server -------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
