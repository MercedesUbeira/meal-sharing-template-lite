import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./IndividualMeal.css";

function IndividualMeals() {
  const [meal, setMeal] = useState(null);
  const {mealID} = useParams();

  useEffect(() => {
    fetch(`http://localhost:3074/api/meals/${mealID}`)
    .then(res => res.json())
    .then(res => setMeal(res))
    .catch(e => console.log(e));
  }, [mealID]);
  if (!meal) {
    return <div>Loading...</div>;
  }
  return (
    <div className="meal-details">
        <h2>{meal.title}</h2>
        <img src={meal.image_link} alt={meal.title} className="meal-image"/>
        <p>{meal.description}</p>
    </div>
  );
}

export default IndividualMeals;