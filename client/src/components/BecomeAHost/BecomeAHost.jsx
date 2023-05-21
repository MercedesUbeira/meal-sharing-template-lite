import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewMealForm from './NewMealForm/NewMealForm'
import "./BecomeAHost.css";

const BecomeAHost = () => {
  const navigate = useNavigate();
  const [newMealData, setNewMealData] = useState({
    title: "",
    description: "",
    location: "",
    max_reservations: "",
    price: "",
    image_link: "",
    when: new Date(),
    created_date: new Date(),
  });

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMealData),
    };

    fetch("http://localhost:3074/api/meals", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/meals/" + data[0]);

      })
      .catch((error) => {
        console.log("Error creating reservation:", error);
      });
  };

  return <NewMealForm submit={() => handleSubmit()} newMealData={newMealData} setNewMealData={(data) => setNewMealData(data)}/>
};
export default BecomeAHost;
