import NavBar from "./components/navbar"
import Home from "./pages/home"
import { useEffect, useState } from "react"
import CartSideBar from "./components/CartSideBar";
import ProductDetails from "./pages/productdetails";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";



function App() {

// Search filtering functionality

const [searchedItems, setsearchedItems] = useState('');



const onSearchChange = (e) => {
  setsearchedItems(e.target.value.toLowerCase());
};


//save to local storage function
 
  const [cartItems, setCartItems] = useState(() => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart:", error);
    return [];
  }
});

const [showCart, setShowCart] = useState(false);

// ✅ Save cart to localStorage when cartItems change
useEffect(() => {
  try {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error saving cart:", error);
  }
}, [cartItems]);



 

  // Add to cart functionality
  const addToCart = (product, quantity = 1) => {
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
      setCartItems(prev => [...prev, { ...product, quantity}]);
    }
  }

  // Toggle cart
  const toggleCart = () =>{
    setShowCart(prev => !prev)
  }

  //remove from cart function
  const removeFromCart = (idToRemove) => {
    setCartItems(prev => prev.filter(item => item.id !== idToRemove))
  }

  //increase function
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

  //decrease quantity
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
      <NavBar cartCount ={cartItems.length} 
              onCartClick={toggleCart} 
              onSearchChange={onSearchChange} 
              searchValue={searchedItems}/>

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} searchedItems={searchedItems} />} />
        <Route path="/product/:id" element={<ProductDetails increaseQuantity={increaseQuantity}
                                                            decreaseQuantity={decreaseQuantity}
                                                            addToCart={addToCart}
                                                            cartItems = {cartItems}/>} />
      </Routes>
      <Footer />
      {showCart && <CartSideBar cartItems={cartItems} 
                                onRemoveItem={removeFromCart} 
                                increaseQuantity={increaseQuantity} 
                                decreaseQuantity={decreaseQuantity}
                                onCloseClick={toggleCart}/>}
      
    </div>
    
    </>
  )
}

export default App
