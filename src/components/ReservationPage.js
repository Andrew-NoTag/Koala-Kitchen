import React, { useState } from "react";
import styles from "../styles/ReservationPage.module.css";
import Cart from "./Cart";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function ReservationPage({ cartItems, removeFromCart }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const availableTimes = ["12:00 PM", "2:00 PM", "6:00 PM", "8:00 PM"];

  const handleReserve = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time for your reservation.");
      return;
    }
    alert(
      `Reservation confirmed for ${selectedDate.toDateString()} at ${selectedTime}`
    );
  };

  return (
    <div className={styles.reservationPage}>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <div className={styles.container}>
        {/* Calendar */}
        <div className={styles.calendarContainer}>
          <h2>Select a Date</h2>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>

        {/* Time Slots */}
        <div className={styles.timeslotContainer}>
          <h2>Select a Time</h2>
          <div className={styles.timeslots}>
            {availableTimes.map((time) => (
              <button
                key={time}
                className={`${styles.timeslotButton} ${
                  selectedTime === time ? styles.selected : ""
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.cartContainer}>
        {Object.keys(cartItems).length === 0 && (
          <p className={styles.emptyCartMessage}>
            Your cart is empty. Add items to your cart before making a
            reservation.
          </p>
        )}
      </div>

      <button
        className={styles.reserveButton}
        onClick={handleReserve}
        disabled={Object.keys(cartItems).length === 0}
      >
        Reserve
      </button>
    </div>
  );
}

export default ReservationPage;
