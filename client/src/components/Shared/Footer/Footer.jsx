import React from "react";
import "./Footer.css";
import logonotext from "../../../assets/images/logonotext.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="corner-logo">
        <img src={logonotext} alt="Logo" />
      </div>
      <ul className="footer-menu">
        <li className="footer-item">
          <a href="/">Home</a>
        </li>
        <li className="footer-item">
          <a href="/about">About</a>
        </li>
        <li className="footer-item">
          <a href="/meals">Meals</a>
        </li>
        <li className="footer-item">
          <a href="/BecomeAHost">Become a Host</a>
        </li>
      </ul>
      <div className="footer-info">
        <p>Søren Frichs Vej 38K, th, 8230 Aarhus</p>
        <p>Email: mercedesubeira@gmail.com</p>
        <p>Phone: +45 12345678</p>
      </div>
    </footer>
  );
};

export default Footer;
