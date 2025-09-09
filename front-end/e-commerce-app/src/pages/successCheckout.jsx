import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const SuccessCheckout = () => {

  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState();
  


 useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `https://backend-gnpawsentials.onrender.com/api/orders/${orderId}`
        ); 
        setOrder(res.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchOrder();
  }, []);



  return (

    <>

    
          
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-8 text-center rounded-2xl bg-white shadow-lg">
        <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-6" />
        <h1 className="text-2xl font-semibold mb-4">
          Payment Successful! 🎉
        </h1>
        <p className="text-gray-600 mb-8">
          Your checkout is complete. Thank you for your order!
        </p>


        <h2 className="text-lg font-semibold mb-3">Order details: </h2>

        <ul className="text-left space-y-2">
          {order.items.map((item) => (
            <li key={item.productId}>
                {item.name} x {item.quantity} = ₱{item.price * item.quantity}
            </li>
          ))}


        </ul>
        <button
          className="px-6 py-3 text-white bg-amber-600 hover:bg-amber-500 rounded-full transition cursor-pointer"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
    
    </>
    
  );
};

export default SuccessCheckout;