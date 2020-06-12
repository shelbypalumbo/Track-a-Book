import React from "react";
import logo from "./Track-a-Book.png";
import "./style.css";

function Footer() {
  return (
    <footer>
      <p className="footer">
        <hr />
        <img src={logo} alt="logo" className="logo" /> Track-a-Book, a React.js
        application.
      </p>
    </footer>
  );
}

export default Footer;
