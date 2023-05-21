import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./NewMealForm.css";
import "react-datepicker/dist/react-datepicker.css";

const NewMealForm = ({submit, newMealData, setNewMealData}) => {
  
    const handleTitleChange = (event) => {
      const newTitle = event.target.value;
      setNewMealData((prevData) => ({
        ...prevData, // to avoid updating the hole data
        title: newTitle
      }));
    };
  
    const handleDescriptionChange = (event) => {
      const newDescription = event.target.value;
      setNewMealData((prevData) => ({
        ...prevData,
        description: newDescription
      }));
    };
  
    const handleLocationChange = (event) => {
      const newLocation = event.target.value;
      setNewMealData((prevData) => ({
        ...prevData,
        location: newLocation
      }));
    };

    const handleMaxReservationsChange = (event) => {
      const newMaxReservation = event.target.value;
      setNewMealData((prevData) => ({
        ...prevData,
        max_reservations: newMaxReservation
      }));
    };

    const handlePriceChange = (event) => {
      const newPrice = event.target.value;
      setNewMealData((prevData) => ({
        ...prevData,
        price: newPrice
      }));
    };

    const handleImageChange = (event) => {
      const newURL = event.target.value;
      setNewMealData((prevData) => ({
        ...prevData,
        image_link: newURL
      }))
    }

    const handleWhenchange = (date) => {
      setNewMealData((prevData) => ({
        ...prevData,
        when: date
      }));
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();

      submit();
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
              value={newMealData.title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <br></br><textarea
              id="description"
              value={newMealData.description}
              onChange={handleDescriptionChange}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={newMealData.location}
              onChange={handleLocationChange}
              required
            />
          </div>
          <div>
            <label htmlFor="maxReservations">Max Number of reservations:</label>
            <input
              type="number"
              id="maxReservations"
              value={newMealData.maxReservations}
              onChange={handleMaxReservationsChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={newMealData.price}
              onChange={handlePriceChange}
              required
            />
          </div>
      
          <DatePicker selected={newMealData.when} onChange={(date) => handleWhenchange(date)} />

          <div>
            <label htmlFor="url-meal">Insert URL:</label>
            <input
              type="text"
              id="image_link"
              value={newMealData.image_link}
              onChange={handleImageChange}
              required
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    );
};


export default NewMealForm;
