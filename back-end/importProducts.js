import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import Product from './models/productSchema.js';
import { Products } from './mockdata/data.js'; 

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    
    await Product.deleteMany();

    await Product.insertMany(Products);

    console.log('Products imported successfully!');
    process.exit();
  } catch (error) {
    console.error('Error importing products:', error);
    process.exit(1);
  }
};

importData();
