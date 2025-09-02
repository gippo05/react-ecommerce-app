import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const CodCheckout = ({cartItems}) => {
  const navigate = useNavigate();
  const {orderId} = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    fetch(`https://backend-gnpawsentials.onrender.com/api/orders/${orderId}`)
      .then(res => res.json())
      .then(data => setOrder(data));
  }, [orderId]);

  if (!order) return <p>Loading...</p>;

  //   const totalPrice = cartItems.reduce(
  //   (acc, item) => acc + Number(item.price) * Number(item.quantity),
  //   0
  // );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-8 text-center rounded-2xl bg-white shadow-lg">
        <Clock className="mx-auto text-amber-500 w-16 h-16 mb-6" />
        <h1 className="text-2xl font-semibold mb-4">
          Your order has been placed! 🎉
        </h1>
         <p className="text-gray-600 mb-4">
          Please prepare <span className="font-bold">₱{order.total}</span> for cash on delivery.
        </p>
        <p className="text-gray-500 mb-8">
          Your payment is marked as <span className="font-semibold">Pending</span> until delivery.
        </p>
        <button
          className="px-6 py-3 text-white bg-amber-600 hover:bg-amber-500 rounded-full transition cursor-pointer"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CodCheckout;