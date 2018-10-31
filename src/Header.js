import React from "react";
import fond from "./Img/FOND.jpg";
import "./Header.css";

const Header = () => (
  <div className="fondlogo">
    <header>
      <img className="fond" src={fond} alt="fond" />
    </header>
  </div>
);

export default Header;
