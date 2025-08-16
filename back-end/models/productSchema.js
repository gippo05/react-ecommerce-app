import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  image: String,
  rating: Number,
  reviews: String,
  originalPrice: Number,
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
