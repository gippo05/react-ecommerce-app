
const CartSideBar = (product) =>{

    return(
        <div>
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button>+</button>
            <button>-</button>
            <button>Remove</button>
        </div>
    )
}

export default CartSideBar