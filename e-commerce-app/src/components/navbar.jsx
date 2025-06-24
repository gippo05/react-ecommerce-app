
import { useState } from "react";
import { NavBarMenuItems } from "../mockdata/navbarmenu"
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../assets/LOGO/main_logo.png'

const NavBar = ({cartCount, onCartClick}) => {

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <nav className="bg-[#F97316] text-[#FFF8E1]">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="ml-5"><img src={logo} alt="G&NLogo" className="h-20 w-full" /></div>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden sm:flex relative items-center">
          <input
            className="bg-white w-[600px] h-10 rounded pr-8 pl-2 text-black"
            type="text"
            id="search-input"
            placeholder="Search items"
            aria-label="Search items"
          />
          <FaSearch className="absolute right-2 text-gray-400 pointer-events-none" />
        </div>
    
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-bold">
          <div className="relative" onClick={onCartClick}>
            <FaCartShopping className="cursor-pointer size-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 text-xs w-5 h-5 flex items-center justify-center text-white rounded-full bg-red-700">{cartCount}</span>
            )}
            
            </div>
           
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
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 transition-all duration-300 ease-in-out">
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

          <div className="relative" onClick={onCartClick}>
            <FaCartShopping className="cursor-pointer size-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 left-3 text-xs w-5 h-5 flex items-center justify-center text-white rounded-full bg-red-700">{cartCount}</span>
            )}
            
            </div>

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