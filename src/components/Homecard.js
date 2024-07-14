import React from "react";
import homeMenu from "../assets/homeMenu.webp";
import homeBook from "../assets/homeBook.webp";
import homeAbout from "../assets/homeAbout.webp";
import "./homecard.css";
import { Link } from "react-router-dom";

function Homecard() {
  return (
    <div className="homecard-wrapper">
      <div className="homecard-card">
        <Link to="/menu">
          <img src={homeMenu} />
          <div className="homecard-card-button">
            <button>MENU</button>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </Link>
      </div>

      <div className="homecard-card">
        <Link to="/book">
          <img src={homeBook} />
          <div className="homecard-card-button">
            <button>RESERVATION</button>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </Link>
      </div>

      <div className="homecard-card">
        <Link to="/about">
          <img src={homeAbout} />
          <div className="homecard-card-button">
            <button>OUR RESTAURANT</button>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Homecard;
