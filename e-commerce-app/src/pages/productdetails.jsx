import { useParams } from "react-router-dom"
import { Products } from "../mockdata/data";

const ProductDetails = () => {
    const { id } = useParams();
    const product = Products.find(p => p.id === Number(id));

    return(
    <div className="flex flex-col md:flex-row gap-6 p-6 self-center">
  {/* Left - Image section */}
  <div className="md:w-1/4">
    <img src={product.image} alt={product.name} className="w-ful rounded-lg h-100" />
    
    {/* Thumbnails (optional) */}
    <div className="flex mt-4 gap-2">
      {product.images?.map((img, i) => (
        <img key={i} src={img} alt={`thumb-${i}`} className="w-20 h-20 object-cover rounded border" />
      ))}
    </div>
  </div>

  {/* Right - Product info */}
  <div className="md:w-1/2">
    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
    <p className="text-red-600 text-xl font-bold mb-1">₱{product.price}</p>
    <p className="line-through text-gray-400 text-sm">₱{product.originalPrice}</p>
    <p className="text-yellow-600 mt-2">⭐ {product.rating} ({product.reviews})</p>

    {/* Variants */}
    <div className="mt-4">
      <p className="font-semibold">Options:</p>
      {product.variants?.map((variant, idx) => (
        <button key={idx} className="border px-3 py-1 mr-2 mt-2 rounded hover:bg-orange-200">
          {variant}
        </button>
      ))}
    </div>

    {/* Quantity selector */}
    <div className="mt-4">
      <p className="font-semibold">Quantity:</p>
      <div className="flex items-center space-x-2 mt-1">
        <button className="px-2 py-1 bg-gray-300 rounded">-</button>
        <span>1</span>
        <button className="px-2 py-1 bg-gray-300 rounded">+</button>
      </div>
    </div>

    {/* Action buttons */}
    <div className="mt-6 flex gap-4">
      <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
        Add to Cart
      </button>
      <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
        Buy Now
      </button>
    </div>
  </div>
</div>

    )
}

export default ProductDetails