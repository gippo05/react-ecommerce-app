

const ProductDetails = (product) => {

    return(
        <div>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.rating}</p>
            <p>{product.reviews}</p>
            <h3>{product.price}</h3>
            
        </div>
    )
}

export default ProductDetails