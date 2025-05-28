import NavBar from "./components/navbar"
import Home from "./pages/home"
import { useState } from "react"


function App() {
 
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  }

  return (
    <>
    <NavBar cartCount ={cartItems.length}/>
    <Home addToCart={addToCart}/>
    
    </>
  )
}

export default App
