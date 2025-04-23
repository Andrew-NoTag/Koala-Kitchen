import React, { useState, useEffect } from "react";
import styles from "../styles/Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  // Current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  // Check if is currently open
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const openingHours = {
    weekdays_lunch: { start: 12, end: 14 },
    weekdays_dinner: { start: 18, end: 20 },
    weekends_breakfast: { start: 8, end: 11 },
    weekends_lunch: { start: 11, end: 15 },
    weekends_dinner: { start: 17, end: 22 },
  };

  const isWeekend = day === 0 || day === 5 || day === 6;
  const hours = isWeekend
    ? hour >= openingHours.weekends_breakfast.start &&
      hour < openingHours.weekends_breakfast.end
      ? openingHours.weekends_breakfast
      : hour >= openingHours.weekends_lunch.start &&
        hour < openingHours.weekends_lunch.end
      ? openingHours.weekends_lunch
      : openingHours.weekends_dinner
    : hour >= openingHours.weekdays_lunch.start &&
      hour < openingHours.weekdays_lunch.end
    ? openingHours.weekdays_lunch
    : openingHours.weekdays_dinner;
  const isOpen =
    (hour > hours.start || (hour === hours.start && minute >= 0)) &&
    (hour < hours.end || (hour === hours.end && minute === 0));

  return (
    // two columns: left side: introduction, buttons; right side: image gallery
    <div className={styles.homepage}>
      <div>
        {/* left side: introduction, buttons */}
        <div className={styles.intro}>
          Reserve a Private <span className={styles.highlight}>Cantonese</span>{" "}
          Meal with Chef Zhang. Koala-Approved!
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/menu">
            <div className={styles.menuButton}>View Menu</div>
          </Link>
          <div className={styles.hoursButton}>
            {currentTime.toLocaleDateString(undefined, {
              weekday: "long",
            })}{" "}
            {now.toLocaleTimeString()}
            <br />
            <span
              style={{
                fontWeight: "bold",
                color: isOpen ? "#388c68" : "#9d2933",
              }}
            >
              {isOpen ? "We are OPEN :)" : "We are CLOSED :("}
            </span>
          </div>
        </div>
      </div>
      {/* right side: image gallery */}
      <div className={styles.image}></div>
    </div>
  );
}

export default Homepage;
