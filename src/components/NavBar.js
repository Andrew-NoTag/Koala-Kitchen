import React from "react";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>Contact</div>
      <div className={styles.navItem}>About us</div>
      <div className={styles.title}>KoalaKitchen</div>
      <div className={styles.navItem}>Menu</div>
      <div className={styles.navItem}>Reservation</div>
    </div>
  );
}

export default NavBar;
