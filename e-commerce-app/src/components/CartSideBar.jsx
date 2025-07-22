import { useNavigate } from "react-router-dom";




const CartSideBar = ({ cartItems, onRemoveItem, increaseQuantity, decreaseQuantity, onCloseClick }) => {

    // console.log("🧪 CartItems in CartSideBar:", cartItems);

    const navigate = useNavigate();

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-gray-100 shadow-lg z-50 overflow-y-auto">
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button
          onClick={onCloseClick}
          className="text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
      </div>

      {/* Cart Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <img src={item.image} alt={item.name} className="h-36" />
              <h3 className="font-semibold">{item.name}</h3>
              <p>₱{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                >
                  🗑️ Remove
                </button>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-orange-400 text-white px-2 py-1 rounded hover:bg-orange-300 transition"
                >
                  -
                </button>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-orange-400 text-white px-2 py-1 rounded hover:bg-orange-300 transition"
                >
                  +
                </button>
              </div>

              <div>
                <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-200 transition"
                        onClick={navigate("/checkout")}>Checkout</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartSideBar