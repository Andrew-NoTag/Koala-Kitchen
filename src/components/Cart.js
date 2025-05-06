import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.css";
import Draggable from "react-draggable";

function Cart({ cartItems, removeFromCart }) {
  const [position, setPosition] = useState(() => {
    // Load cart position from localStorage
    const savedPosition = localStorage.getItem("cartPosition");
    return savedPosition ? JSON.parse(savedPosition) : { x: 0, y: 0 };
  });

  const navigate = useNavigate();

  const handleDragStop = (e, data) => {
    const newPosition = { x: data.x, y: data.y };
    setPosition(newPosition);
    // Save the new position to localStorage
    localStorage.setItem("cartPosition", JSON.stringify(newPosition));
  };

  const handleCheckout = () => {
    if (Object.keys(cartItems).length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      return;
    }
    navigate("/reservation"); // Navigate to the reservation page
  };

  return (
    <Draggable
      bounds="parent"
      position={position}
      onStop={handleDragStop}
    >
      <div className={styles.cartContainer}>
        <div className={styles.title}>Cart</div>
        {Object.keys(cartItems).length > 0 ? (
          <div className={styles.itemList}>
            {Object.entries(cartItems).map(([item, quantity]) => (
              <div key={item} className={styles.itemRow}>
                <div className={styles.itemName}>{item}</div>
                <div className={styles.itemQuantity}>
                  ×{quantity}
                  <button
                    className={styles.deleteButton}
                    onClick={() => removeFromCart(item)}
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.item}>Your cart is empty right now.</div>
        )}
        {/* Checkout Button */}
        <button
          className={styles.checkoutButton}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </Draggable>
  );
}

export default Cart;
