const CheckOutPage = ({ cartItems }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </form>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Items to Checkout</h3>

        <div className="space-y-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-md p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium text-gray-700">{item.name}</h4>
                  <p className="text-gray-600">₱{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="w-full md:w-auto px-6 py-3 bg-orange-300 hover:bg-orange-200 text-white font-semibold rounded-md transition">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
