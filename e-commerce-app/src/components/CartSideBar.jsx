
const CartSideBar = ({cartItems}) =>{

    return(
        <div className="fixed top-0 right-0 w-80 h-full bg-gray-100 shadow-lg p-4 overflow-y-auto">
            <h2 className="ext-lg font-bold mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="mb-4 border-b pb-2">
                        <img src={item.image} alt={item.name} className="h-35"/>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default CartSideBar