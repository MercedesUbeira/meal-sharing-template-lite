import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/images/logo.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="overlay">
      <div className="center-wrapper">
        <img src={logo} alt="Logo" className="home-logo"></img>
        <button className="start-btn" onClick={() => navigate("/meals")}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Home;
