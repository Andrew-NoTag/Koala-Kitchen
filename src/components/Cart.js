import React from "react";
import styles from "../styles/Cart.module.css";
import Draggable from "react-draggable";

function Cart({ cartItems, updateCart, removeFromCart}) {
  return (
    <Draggable bounds="parent" defaultPosition={{ x: 0, y: 0 }}> 
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
      </div>
    </Draggable>
  );
}

export default Cart;
