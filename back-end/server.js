import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/productRoutes.js';
import path from 'path';

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


// Routes
app.use('/api/products', router);

app.get('/', (req, res) => {
  res.send('API is running...');
});



// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
