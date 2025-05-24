
import { useState } from "react";
import { NavBarMenuItems } from "../mockdata/navbarmenu"
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <nav className="bg-[#1E1E1E] text-white">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold ml-5">TRENDORA</div>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden sm:flex relative items-center">
          <input
            className="bg-white w-[400px] h-10 rounded pr-8 pl-2 text-black"
            type="text"
            id="search-input"
            placeholder="Search items"
            aria-label="Search items"
          />
          <FaSearch className="absolute right-2 text-gray-400 pointer-events-none" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-bold">
          <FaCartShopping className="cursor-pointer" />
          {NavBarMenuItems.map(item => (
            <a
              key={item.id}
              href={item.link}
              className="hover:bg-white hover:text-black px-3 py-2 rounded transition-colors"
            >
              {item.title} {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <RxHamburgerMenu className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {/* Search Bar (mobile view) */}
          <div className="relative flex items-center">
            <input
              className="bg-white w-full h-10 rounded pr-8 pl-2 text-black"
              type="text"
              placeholder="Search items"
              aria-label="Search items"
            />
            <FaSearch className="absolute right-2 text-gray-400 pointer-events-none" />
          </div>

          <FaCartShopping className="cursor-pointer" />

          {NavBarMenuItems.map(item => (
            <a
              key={item.id}
              href={item.link}
              className="hover:bg-white hover:text-black px-3 py-2 rounded transition-colors font-bold"
            >
              {item.title} {item.icon}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
export default NavBar