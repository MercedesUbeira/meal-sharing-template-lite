import React from "react";
import "./NavBar.css";
import logonotext from "../../../assets/images/logonotext.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="corner-logo">
        <img src={logonotext} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/meals">Meals</a>
        </li>
        <li className="navbar-item">
          <a href="/BecomeAHost">Become a Host</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;