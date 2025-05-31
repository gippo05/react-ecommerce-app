import NavBar from "./components/navbar"
import Home from "./pages/home"
import { useState } from "react"
import CartSideBar from "./components/CartSideBar";

function App() {
 
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  }

  const toggleCart = () =>{
    setShowCart(prev => !prev)
  }

  const removeFromCart = (idToRemove) => {
    setCartItems(prev => prev.filter(item => item.id !== idToRemove))
  }
  
  return (
    <>
    <div className="relative">
      <NavBar cartCount ={cartItems.length} onCartClick={toggleCart}/>
      <Home addToCart={addToCart}/>
      {showCart && <CartSideBar cartItems={cartItems} onRemoveItem={removeFromCart}/>}
      
    </div>
    
    </>
  )
}

export default App
