
const CartSideBar = ({cartItems, onRemoveItem, increaseQuantity, decreaseQuantity}) =>{

    return(
        <div className="fixed top-0 right-0 w-80 h-full bg-gray-100 shadow-lg p-4 overflow-y-auto z-99">
            <h2 className="text-lg font-bold mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="mb-4 border-b pb-2">
                        <img src={item.image} alt={item.name} className="h-36"/>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p>{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button className="mt-2 px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition" 
                        onClick={() => onRemoveItem(item.id)}><span role="img" aria-label="trash">🗑️</span>Remove</button>
                        <button className="mt-2 m-1 px-2 py-1 bg-rose-600 text-white rounded hover:bg-rose-700 transition"
                        onClick={() => decreaseQuantity(item.id)}>-</button>
                        <button className="mt-2 m-1 px-2 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
                        onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default CartSideBar