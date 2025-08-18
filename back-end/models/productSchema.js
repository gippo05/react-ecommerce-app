import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: {type: Number, required: true},
  image: String,
  rating: Number,
  reviews: String,
  originalPrice: {type: Number, required: true}
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
