import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MealsList.css";

function MealsList() {
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3074/api/meals/")
      .then((res) => res.json())
      .then((res) => setMeals(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="meals-list-wrapper">
      <div className="background-overlay"></div>
      <div className="meals-list-container">
        <div className="meals-list">
          <h1>Meals</h1>
          <ul>
            {meals.map((meal) => (
              <li key={meal.id}>
                <h2>{meal.title}</h2>
                <img
                  src={meal.image_link}
                  alt={meal.title}
                  className="meal-image"
                />
                <p>{meal.description}</p>
                <p>{meal.price} DKK </p>
                <button
                  className="view-btn"
                  onClick={() => navigate(`/meals/${meal.id}`)}
                >
                 Book here
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MealsList;
