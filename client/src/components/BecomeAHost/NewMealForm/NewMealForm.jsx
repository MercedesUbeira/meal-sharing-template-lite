import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewMealForm.css";

const NewMealForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [maxReservations, setMaxReservations] = useState('');
    const [price, setPrice] = useState('');
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };

    const handleMaxReservationsChange = (event) => {
      setMaxReservations(event.target.value);
    };

    const handlePriceChange = (event) => {
      setPrice(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();

    const reservationData = {
      title: title,
      description: description,
      location: location,
      max_reservations: maxReservations,
      price: price,
      created_date: new Date().toISOString()
    };

    onSubmit(mealData);
};

    return (
      <div className="meal-details-flex">
        <h2>Become a host!</h2>
        <h3>Your adventure begins here</h3>
        <img
            src="https://upmeals.ca/wp-content/uploads/2021/05/dinner-together.jpg"
            alt="people sharing food"
          />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <br></br><textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              required
            />
          </div>
          <div>
            <label htmlFor="maxReservations">Max Number of reservations:</label>
            <input
              type="number"
              id="maxReservations"
              value={maxReservations}
              onChange={handleMaxReservationsChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    );
};


export default NewMealForm;
