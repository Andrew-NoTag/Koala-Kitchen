import React from "react";
import styles from "../styles/Footer.module.css";
import instagramIcon from "../assets/instagram_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";
import mapIcon from "../assets/map_marker.svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon issue
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

function Footer() {
  // map center

  // 370 Jay St
  const center = [40.69332171964883, -73.98748151810337];

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
          <a href="https://www.instagram.com/andrew_zhang0928/" target="_blank">
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
            <div className={styles.p}>New York, NY</div>
          </div>
        </div>
        {/* map */}
        <MapContainer
          center={center}
          zoom={15}
          style={{ width: "310px", height: "300px", borderRadius: "7px" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
          />
          <Marker
            position={center}
            eventHandlers={{
              click: () => {
                window.open(
                  "https://www.google.com/maps/place/425+summit+ave+jersey+city",
                  "_blank"
                );
              },
            }}
          >
            <Popup>Koala Kitchen, New York, NY</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Footer;
