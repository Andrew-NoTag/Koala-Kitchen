import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";
import Homepage from "./components/Homepage.js";
import Footer from "./components/Footer.js";
import MenuPage from "./components/MenuPage.js";
import ReservationPage from "./components/ReservationPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState(() => {
    // Load cart from local storage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const addToCart = (itemName) => {
    setCart((prevCart) => {
      const updatedCart = {
        ...prevCart,
        [itemName]: (prevCart[itemName] || 0) + 1,
      };
      // Save updated cart to local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[itemName];
      // Save updated cart to local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <BrowserRouter>
      <div>
        {/* NavBar at top of the page */}
        <NavBar />

        {/* Routes to different contents */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/menu"
            element={
              <MenuPage
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/reservation"
            element={
              <ReservationPage
                cartItems={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>

        {/* Footer at bottom of the page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
