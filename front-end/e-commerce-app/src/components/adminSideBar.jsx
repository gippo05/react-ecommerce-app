import { useState } from "react";
import { 
  FaTachometerAlt, 
  FaBoxOpen, 
  FaTags, 
  FaShoppingCart, 
  FaUsers, 
  FaChartLine, 
  FaBell, 
  FaCog, 
  FaSignOutAlt 
} from "react-icons/fa";

const AdminSidebar = () => {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col p-5">
      {/* Logo */}
      <div className="mb-10">
        <img src="" alt="logo" className="w-30" />
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="list-none p-0 m-0">
          <li className="mb-4 flex items-center gap-2">
            <FaTachometerAlt />
            <a href="#" className="hover:text-blue-600">Dashboard</a>
          </li>

          <li className="mb-4">
            <div
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
            >
              <FaBoxOpen />
              <span>Products</span>
            </div>
            {productsOpen && (
              <ul className="list-none pl-6 mt-1">
                <li className="mb-2"><a href="#" className="hover:text-blue-600">Product List</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-600">Categories</a></li>
              </ul>
            )}
          </li>

          <li className="mb-4 flex items-center gap-2">
            <FaShoppingCart />
            <a href="#" className="hover:text-blue-600">Sales</a>
          </li>

          <li className="mb-4 flex items-center gap-2">
            <FaUsers />
            <a href="#" className="hover:text-blue-600">Customers</a>
          </li>

          <li className="mb-4 flex items-center gap-2">
            <FaChartLine />
            <a href="#" className="hover:text-blue-600">Analytics</a>
          </li>

          <li className="mb-4 flex items-center gap-2">
            <FaBell />
            <a href="#" className="hover:text-blue-600">Notifications</a>
          </li>

          <li className="mb-4 flex items-center gap-2">
            <FaCog />
            <a href="#" className="hover:text-blue-600">Settings</a>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <button className="flex items-center gap-2 font-bold py-2 px-0 hover:text-red-600">
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
