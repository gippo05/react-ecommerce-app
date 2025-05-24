
import { NavBarMenuItems } from "../mockdata/navbarmenu"
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const NavBar = () => {

    return(
        <>
        
        <nav className="bg-[#1E1E1E]">
            <div className="h-18 justify-between items-center flex px-10">
                {/* logo */}
                <div className="text-2xl font-bold px-6 text-white">TRENDORA</div>

                {/* search bar */}
                    <div className="relative flex items-center">
                        <input
                            className="bg-white w-150 h-10 rounded pr-8 pl-2 ml-5"
                            type="text"
                            id="search-input"
                            placeholder="Search items"
                        />
                        <FaSearch className="absolute right-2 text-gray-400 pointer-events-none" />
                    </div>  


                {/* Menu items */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-5 text-white font-bold px-6">
                        <FaCartShopping className="cursor-pointer"/>
                        {NavBarMenuItems.map(item => (
                            <li className="hover:bg-white hover:text-black px-3 py-2 rounded cursor-pointer transition-colors" key={item.id}>
                            <a href={item.link}>
                            {item.title}{item.icon}</a></li>))}
                    </ul> 
                </div>
    
                
                
            </div>
        </nav>
        </>
    )
}
export default NavBar