import React from "react";
import Navbar from "../../components/Navbar";
import Aboutleft from "../../components/Aboutleft";
import Aboutright from "../../components/Aboutright";
import "./about.css";

function About() {
  return (
    <div className="about-section container">
      <div className="about-nav">
        <Navbar />
      </div>
      <div className="about-section-container">
        <Aboutleft />
        <Aboutright />
      </div>
    </div>
  );
}

export default About;
