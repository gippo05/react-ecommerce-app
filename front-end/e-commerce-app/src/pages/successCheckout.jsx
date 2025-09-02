import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const SuccessCheckout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-8 text-center rounded-2xl bg-white shadow-lg">
        <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-6" />
        <h1 className="text-2xl font-semibold mb-4">
          Payment Successful! 🎉
        </h1>
        <p className="text-gray-600 mb-8">
          Your checkout is complete. Thank you for your order!
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

export default SuccessCheckout;