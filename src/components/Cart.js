import React from "react";
import styles from "../styles/Cart.module.css";
import Draggable from "react-draggable";

function Cart() {
  return (
    <Draggable bounds="parent" defaultPosition={{ x: 0, y: 0 }}> 
      <div className={styles.cartContainer}>
        <div className={styles.title}>Cart</div>
        <div className={styles.item}>Your cart is empty right now.</div>
      </div>
    </Draggable>
  );
}

export default Cart;
