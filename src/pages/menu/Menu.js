import React from "react";
import Navbar from "../../components/Navbar";
import "./menu.css";
import Menuleft from "../../components/Menuleft";
import Menuright from "../../components/Menuright";

function Menu() {
  return (
    <div className="menu-section container">
      <div className="menu-nav">
        <Navbar />
      </div>
      <div className="menu-section-container">
        <Menuleft />
        <Menuright />
      </div>
    </div>
  );
}

export default Menu;
