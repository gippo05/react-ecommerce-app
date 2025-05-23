import { NavBarMenuItems } from "../mockdata/navbarmenu"
import { FaSearch } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";


const NavBar = () => {

    return(
        <nav className="bg-orange-600">
            <div className="h-18 justify-between items-center flex px-10">
                {/* logo */}
                <div className="text-2xl font-bold px-6 text-white">TRENDORA</div>

                {/* search bar */}
                    <div>
                        <input className="bg-white w-80 h-8 rounded" type="text" id="search-input" placeholder="Search items"/>
                    </div>      


                {/* Menu items */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-5 text-white font-bold px-6">
                        {NavBarMenuItems.map(item => (
                            <li className="hover:bg-orange-300 px-3 py-2 rounded cursor-pointer transition-colors" key={item.id}>
                            <a href={item.link}>
                                                {item.title}</a></li>))}
                    </ul> 
                </div>
    
                
                    
                {/* cart button */}
            </div>
        </nav>
    )
}
export default NavBar