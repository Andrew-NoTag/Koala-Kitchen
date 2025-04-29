import React, { useState } from "react";
import styles from "../styles/MenuPage.module.css";
import Cart from "./Cart";
import { FaPlus } from "react-icons/fa";
import menuData from "../data/menuData";

function MenuPage() {
  const [cart, setCart] = useState({});

  const addToCart = (itemName) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemName]: (prevCart[itemName] || 0) + 1,
    }));
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[itemName];
      return updatedCart;
    });
  };

  return (
    <div className={styles.menuPage}>
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
      <div className={styles.title}>Menu</div>
      <div className={styles.intro}>Caan Paai</div>
      <div className={styles.menuContainer}>
        {menuData.map((category) => (
          <div key={category.category} className={styles.column}>
            <div className={styles.menuTitle}>{category.category}</div>
            <div style={{ marginTop: "2rem" }}></div>
            {category.items.map((item) => (
              <React.Fragment key={item.name}>
                <div className={styles.menuItem}>
                  <img
                    className={styles.itemImage}
                    src={item.image}
                    alt={item.name}
                  />
                  <div>
                    <div className={styles.itemName}>
                      {item.name}
                      <FaPlus
                        className={styles.addIcon}
                        onClick={() => addToCart(item.name)}
                      />
                    </div>
                    <div className={styles.itemDescription}>
                      {item.description}
                    </div>
                  </div>
                </div>
                <div className={styles.breakLine}></div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;