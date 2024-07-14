import React from "react";
import "./menuleft.css";
import menuleft from "../assets/menu/menuleft.webp";

function Menuleft() {
  return (
    <div className="menu-left">
      <div className="menu-left-container">
        <img className="menu-left-picture" src={menuleft} />
        <p className="menu-left-text">MENU</p>
      </div>
    </div>
  );
}

export default Menuleft;
