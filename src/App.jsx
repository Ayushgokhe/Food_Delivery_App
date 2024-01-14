import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Order from "./components/Order";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [cart, setCart] = useState(() => {
    // Retrieve cart items from localStorage on component mount
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Save cart items to localStorage whenever the cart state changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const handleIncrement = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
    updatedCart[existingItemIndex].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecrement = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (updatedCart[existingItemIndex].quantity > 1) {
      updatedCart[existingItemIndex].quantity -= 1;
    } else {
      updatedCart.splice(existingItemIndex, 1);
    }

    setCart(updatedCart);
  };


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Order} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route
            path="/product/:productId"
            element={<Product onAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<Cart cartItems={cart} onRemove={handleRemoveFromCart} onIncrement={handleIncrement} onDecrement={handleDecrement}/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
