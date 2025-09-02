import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";

const FailedCheckout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-8 text-center rounded-2xl bg-white shadow-lg">
        <XCircle className="mx-auto text-red-500 w-16 h-16 mb-6" />
        <h1 className="text-2xl font-semibold mb-4">
          Payment Unsuccessful.. 😢
        </h1>
        <p className="text-gray-600 mb-8">
          Your checkout cannot be completed. Kindly try again.
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

export default FailedCheckout;