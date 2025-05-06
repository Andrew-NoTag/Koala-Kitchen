import React from "react";
import styles from "../styles/AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutUsPage}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to Koala Kitchen! This is a meal management system designed to
        help chefs see the grocery list clearly and make it easier for customers
        to place their orders. It streamlines the process for both the kitchen
        and the dining experience.
      </p>
      <p className={styles.description}>
        I am Andrew Zhang, and I created this system for personal use. If others
        want to use it, feel free to modify the content in the menu data to suit
        your needs. It's simple and customizable for any restaurant or kitchen.
      </p>
    </div>
  );
}

export default AboutUs;
