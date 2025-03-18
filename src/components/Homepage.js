import React from "react";
import styles from "../styles/Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div>
        {/* left side: introduction, buttons */}
        <div className={styles.intro}>
          Reserve a Private <span className={styles.highlight}>Cantonese</span>{" "}
          Meal with Chef Zhang. Koala-Approved!
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.menuButton}>View Menu</div>
          <div className={styles.hoursButton}>Hours</div>
        </div>
      </div>
      {/* right side: image gallery */}
      <div className={styles.image}></div>
    </div>
  );
}

export default Homepage;
