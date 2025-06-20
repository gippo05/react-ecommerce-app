import NavBar from "./components/navbar"
import Home from "./pages/home"
import { useState } from "react"
import CartSideBar from "./components/CartSideBar";
import ProductDetails from "./pages/productdetails";
import { Routes, Route } from "react-router-dom";


function App() {
 
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)

    if(existingItem){
      const updatedCart =  cartItems.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
      );
      setCartItems(updatedCart);
    }
    else{
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
    }
  }

  const toggleCart = () =>{
    setShowCart(prev => !prev)
  }

  const removeFromCart = (idToRemove) => {
    setCartItems(prev => prev.filter(item => item.id !== idToRemove))
  }

  const increaseQuantity = (productId) => {
    const itemToIncrease = cartItems.find(item => item.id === productId)

    if(itemToIncrease){
      const updatedCart = cartItems.map(item =>
      item.id === productId 
      ? {...item, quantity: item.quantity + 1}
    : item
  );
      setCartItems(updatedCart)
    }
  }

 const decreaseQuantity = (productId) => {
  const itemToDecrease = cartItems.find(item => item.id === productId);

  if (itemToDecrease) {
    if (itemToDecrease.quantity === 1) {
      // Remove item if quantity is 1 and user wants to decrease
      const updatedCart = cartItems.filter(item => item.id !== productId);
      setCartItems(updatedCart);
    } else {
      // Otherwise just decrease quantity by 1
      const updatedCart = cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCartItems(updatedCart);
    }
  }
};
  
  return (
    <>
    <div className="relative bg-[#FFFDE7]">
      <NavBar cartCount ={cartItems.length} onCartClick={toggleCart}/>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      {showCart && <CartSideBar cartItems={cartItems} 
                                onRemoveItem={removeFromCart} 
                                increaseQuantity={increaseQuantity} 
                                decreaseQuantity={decreaseQuantity}/>}
      
    </div>
    
    </>
  )
}

export default App
