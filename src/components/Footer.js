import React from "react";
import styles from "../styles/Footer.module.css";
import instagramIcon from "../assets/instagram_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";
import mapIcon from "../assets/map_marker.svg";
import location from "../assets/location.png";

function Footer() {
  return (
    // three columns: left: contact, logo. middle: hours, telephone. right: direction
    <div className={styles.footer}>
      {/* first column */}
      <div className={styles.column} style={{ marginLeft: "10%" }}>
        <div className={styles.title}>KoalaKitchen</div>
        <div className={styles.p} style={{ marginTop: "3rem", width: "80%" }}>
          This young chef from Guangdong will surprise you in a way you have
          never thought about Cantonese Cuisine.
        </div>
        <div className={styles.p} style={{ marginTop: "3rem" }}>
          2024-2025
        </div>
        <div className={styles.icons} style={{ marginTop: "3rem" }}>
          <a href="https://www.instagram.com/andrew_zhang0928/">
            <img src={instagramIcon} alt="Instagram"></img>
          </a>
        </div>
      </div>
      {/* second column */}
      <div className={styles.column}>
        {/* hours */}
        <div className={styles.header}>Hours</div>
        <div className={styles.p} style={{ marginTop: "0.5rem" }}>
          Monday - Thursday:
        </div>
        <div className={styles.p}>Lunch: 12pm - 2pm</div>
        <div className={styles.p}>Dinner: 6pm - 8pm</div>
        <div className={styles.p} style={{ marginTop: "1rem" }}>
          Friday - Sunday:
        </div>
        <div className={styles.p}>Breakfast / Brunch: 8am - 11am</div>
        <div className={styles.p}>Lunch: 11pm - 3pm</div>
        <div className={styles.p}>Dinner: 5pm - 10pm</div>

        {/* telephone */}
        <div className={styles.header} style={{ marginTop: "2rem" }}>
          Telephone
        </div>
        <div style={{ alignItems: "center", display: "flex", gap: "1rem" }}>
          <img src={phoneIcon} alt="phone"></img>
          <div className={styles.p}>+1 (929) 250-8281</div>
        </div>
      </div>
      {/* third column */}
      <div className={styles.column}>
        <div className={styles.header}>Direction</div>
        <div style={{ alignItems: "center", display: "flex", gap: "1rem" }}>
          <img src={mapIcon} alt="location"></img>
          <div>
            <div className={styles.p}>Koala Kitchen</div>
            <div className={styles.p}>Brooklyn, NY</div>
          </div>
        </div>
        <img
          src={location}
          alt="Koala Kitchen"
          style={{
            width: "310.051px",
            height: "300px",
            flexShrink: "0",
            borderRadius: "7px",
            background:
              "lightgray -146.627px -148.846px / 194.718% 194.231% no-repeat",
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
