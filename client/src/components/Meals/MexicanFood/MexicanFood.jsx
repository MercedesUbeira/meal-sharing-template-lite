import React, { useState, useEffect } from "react";
import './MexicanFood.css'

function MexicanFood() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3074/api/meals/2')
    .then(res => res.json())
    .then(res => setMeal(res))
    .catch(e => console.log(e));
  }, []);
  if (!meal) {
    return <div>Loading...</div>;
  }
  return (
    <div className="meal-details">
        <h2>{meal.title}</h2>
        <img src={meal.image} alt={meal.title} className="meal-image"/>
        <p>{meal.description}</p>
    </div>
  );
}

export default MexicanFood;