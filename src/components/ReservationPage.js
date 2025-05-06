import React, { useState } from "react";
import styles from "../styles/ReservationPage.module.css";
import Cart from "./Cart";
import Calendar from "react-calendar";
import menuData from "../data/menuData";
import "react-calendar/dist/Calendar.css";

function ReservationPage({ cartItems, removeFromCart }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const handleReserve = async () => {
    // Reservation details for email
    const reservationDetails = {
      name: customerName,
      email: customerEmail,
      date: selectedDate?.toDateString(),
      time: selectedTime,
      dishes: Object.entries(cartItems)
        .map(([dish, quantity]) => `${dish} (x${quantity})`)
        .join(", "), // Convert to a comma-separated string
      ingredients: Object.keys(cartItems).flatMap((dish) =>
        menuData
          .flatMap((category) => category.items)
          .find((item) => item.name === dish)?.ingredients || []
      ),
    };

    try {
      // Send reservation details using Formcarry
      const response = await fetch("https://formcarry.com/s/8Q9ulXO2vG6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationDetails),
      });

      alert(
        `Reservation confirmed for ${selectedDate?.toDateString()} at ${selectedTime}\n`
      );
    } catch (error) {
      console.error("Error sending reservation details:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const generateTimeSlots = (date) => {
    if (!date) return [];
    const day = date.getDay();
    let timeSlots = [];

    if (day >= 1 && day <= 4) {
      timeSlots = [
        ...generateHourlySlots(12, 14),
        ...generateHourlySlots(18, 20),
      ];
    } else {
      timeSlots = [
        ...generateHourlySlots(8, 11),
        ...generateHourlySlots(11, 15),
        ...generateHourlySlots(17, 22),
      ];
    }

    return timeSlots;
  };

  const generateHourlySlots = (startHour, endHour) => {
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      const time = formatTime(hour);
      slots.push(time);
    }
    return slots;
  };

  const formatTime = (hour) => {
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour > 12 ? hour - 12 : hour;
    return `${formattedHour}:00 ${period}`;
  };

  const availableTimes = generateTimeSlots(selectedDate);

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
            {availableTimes.length > 0 ? (
              availableTimes.map((time) => (
                <button
                  key={time}
                  className={`${styles.timeslotButton} ${
                    selectedTime === time ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))
            ) : (
              <p className={styles.noTimesMessage}>
                Please select a date to view available time slots.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Customer Details */}
      <div className={styles.customerDetails}>
        <h2>Customer Details</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          className={styles.inputField}
        />
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
