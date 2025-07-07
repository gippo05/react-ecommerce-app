import { useParams } from "react-router-dom";
import { Products } from "../mockdata/data";
import { useState } from "react";

const ProductDetails = ({addToCart, cartItems}) => {
  const { id } = useParams();
  const product = Products.find(p => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

 const isInCart = () => cartItems.some(item => item.id === product.id);


  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  }

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  }
  return (
    <div className="min-h-screen flex items-start justify-center px-4 py-10 bg-[#FFFDE7]">
      <div className="flex flex-col md:flex-row gap-10 max-w-5xl w-full">
        {/* Left - Image section */}
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-xs rounded-lg"
          />

          {/* Thumbnails */}
          <div className="flex mt-4 gap-2 flex-wrap justify-center">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className="w-20 h-20 object-cover rounded border"
              />
            ))}
          </div>
        </div>

        {/* Right - Product info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-red-600 text-2xl font-bold mb-1">₱{product.price}</p>
          <p className="line-through text-gray-400 text-sm mb-2">₱{product.originalPrice}</p>
          <p className="text-yellow-600 mb-4">⭐ {product.rating} ({product.reviews})</p>

          {/* Variants */}
          <div className="mb-4">
            <p className="font-semibold mb-1">Options:</p>
            {product.variants?.map((variant, idx) => (
              <button
                key={idx}
                className="border px-3 py-1 mr-2 mt-2 rounded hover:bg-orange-200"
              >
                {variant}
              </button>
            ))}
          </div>

          {/* Quantity selector */}
          <div className="mb-4">
            <p className="font-semibold mb-1">Quantity:</p>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-200 cursor-pointer" 
              onClick={handleDecrease}>-</button>
              <span className="px-2">{quantity}</span>
              <button className="px-3 py-1 bg-gray-300 rounded  hover:bg-gray-200 cursor-pointer" 
              onClick={handleIncrease}>+</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed" 
                onClick={() => addToCart(product, quantity)}
                disabled={isInCart()}
              >
                {isInCart() ? "Already in Cart" : "Add to Cart"}
              </button>
            
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
