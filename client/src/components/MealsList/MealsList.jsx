import React, { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import "./MealsList.css";
import SpicyTacos from '../../assets/images/SpicyTacos.jpg';
import Asado from '../../assets/images/Asado.jpeg';
import PadThai from '../../assets/images/PadThai.jpg';
import Sushi from '../../assets/images/Sushi.jpg';
import ChickenWithNaan from '../../assets/images/Chicken-with-naan.jpg';
import Milanesa from '../../assets/images/Milanesa.jpg';

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
          <ul>
            {meals.map((meal) => (
              <li key={meal.id}>
                <h2>{meal.title}</h2>
                <img src={getMealImage(meal.id)} alt={meal.title} className="meal-image" />
                <p>{meal.description}</p>
                <p>{meal.price} Dkk</p>
                <button className="view-btn" onClick={() => navigate(`/meals/${meal.id}`)}>
                  View Meal
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function getMealImage(mealId) {
  // Map the meal ID to the corresponding imported image
  switch (mealId) {
    case 2:
      return SpicyTacos;
    case 3:
      return Asado;
    case 4:
      return PadThai;
    case 5:
      return Sushi;
    case 6:
      return ChickenWithNaan;
    case 7:
      return Milanesa;
    default:
      return ""; // Default fallback image
  }
}

export default MealsList;
