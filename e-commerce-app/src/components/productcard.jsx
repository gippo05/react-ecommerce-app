

const ProductCard = ({product, addToCart}) =>{

    return(
    <div className="rounded p-4 w-auto">
        <img src={product.image} alt={product.name} className="lg:h-80 w-full h-100 object-cover rounded" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p>₱{product.price}</p>
        <p>⭐ {product.rating} ({product.reviews})</p>
        <button 
        onClick={() => addToCart(product)} 
        className="mt-2 bg-[#3B82F6] text-white px-4 py-2 rounded hover:bg-[#60A5FA] shadow-lg transition duration-300 cursor-pointer">Add to Cart</button>
        </div>
    )
}

export default ProductCard;