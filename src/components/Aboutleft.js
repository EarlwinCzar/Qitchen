import React from "react";
import aboutleft from "../assets/about/aboutleft.webp";
import "./aboutleft.css";

function Aboutleft() {
  return (
    <div className="about-left">
      <div className="about-left-container">
        <img className="about-left-picture" src={aboutleft} />
        <p className="about-left-text">ABOUT</p>
      </div>
    </div>
  );
}

export default Aboutleft;
