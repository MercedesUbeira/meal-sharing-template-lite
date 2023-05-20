import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Resevations.css";

const Reservations = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();

    const reservationData = {
      name: name,
      date: date,
      time: time,
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(reservationData)
    };


    // OJO PORQUE CAPAZ ESTA NO ES LA IP
    fetch("http://localhost:3074/api/reservations", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      navigate("/success");
      })
      .catch((error) => {
        console.log("Error creating reservation:", error);
      });
   };
  
    return (
      <div className="meal-details-flex">
        <h2>Make a Reservation</h2>
        <img
            src="https://upmeals.ca/wp-content/uploads/2021/05/dinner-together.jpg"
            alt="people sharing food"
          />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={handleTimeChange}
              required
            />
          </div>
          <button type="submit">Make Reservation</button>
        </form>
      </div>
    );
};


export default Reservations;
