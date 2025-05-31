
const CartSideBar = ({cartItems, onRemoveItem}) =>{

    return(
        <div className="fixed top-0 right-0 w-80 h-full bg-gray-100 shadow-lg p-4 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="mb-4 border-b pb-2">
                        <img src={item.image} alt={item.name} className="h-36"/>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={() => onRemoveItem(item.id)}>Remove from Cart</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default CartSideBar