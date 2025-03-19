import React from "react";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>Contact</div>
      <div className={styles.navItem}>About us</div>
      <div className={styles.title}>KoalaKitchen</div>
      <Link to="/menu"><div className={styles.navItem}>Menu</div></Link>
      <div className={styles.navItem}>Reservation</div>
    </div>
  );
}

export default NavBar;
