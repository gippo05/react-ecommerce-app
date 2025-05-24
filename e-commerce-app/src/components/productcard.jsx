

const ProductCard = ({product}) =>{

    return(
    <div className="border rounded p-4 w-auto">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p>₱{product.price}</p>
        <p>⭐ {product.rating} ({product.reviews})</p>
        <button className="mt-2 bg-black text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
    )
}

export default ProductCard;