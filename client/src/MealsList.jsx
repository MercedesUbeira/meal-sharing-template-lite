import React, { useState, useEffect } from "react";
import data from "./Data";
import './App.css';

function MealsList() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals(data);
  }, []);

  return (
    <div className="meals-list-wrapper">
        <div className="background-overlay"></div>
        <div className="meals-list-container">
    <div className="meals-list">
      <h1>Meal Sharing</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <h2>{meal.title}</h2>
            <img src={meal.image} alt={meal.title} className="meal-image" />
            <p>{meal.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    
  );
}

export default MealsList;