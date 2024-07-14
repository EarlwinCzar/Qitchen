import React from "react";
import Aboutcaro1 from "./Aboutcaro1";
import Aboutcaro2 from "./Aboutcaro2";
import "./aboutright.css";

function Aboutright() {
  return (
    <div className="about-right">
      <div className="about-right-wrapper-1">
        <div className="about-right-wrapper-1-left">
          <h4>
            SUSHI ARTISTRY
            <br /> REDEFINED
          </h4>
          <p>
            Where culinary craftsmanship meets modern elegance. Indulge in the
            finest sushi, expertly curated to elevate your dining experience.
          </p>
        </div>
        <div className="about-right-wrapper-1-right">
          <Aboutcaro1 />
        </div>
      </div>
      <div className="about-right-wrapper-2">
        <div className="about-right-wrapper-2-rating">
          <div className="about-stars">
            <ul>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
            </ul>
          </div>
          <h4>TRIP ADVISOR</h4>
          <p>BEST SUSHI</p>
        </div>
        <div className="about-right-wrapper-2-rating">
          <div className="about-stars">
            <ul>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
            </ul>
          </div>
          <h4>MICHELIN GUIDE</h4>
          <p>QUALITY FOOD</p>
        </div>
        <div className="about-right-wrapper-2-rating">
          <div className="about-stars">
            <ul>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
            </ul>
          </div>
          <h4>START DINING</h4>
          <p>COOL VIBE</p>
        </div>
      </div>
      <div className="about-right-wrapper-3">
        <div className="about-right-wrapper-3-left">
          <Aboutcaro2 />
        </div>
        <div className="about-right-wrapper-3-right">
          <h4>OUR STORY</h4>
          <p>
            Founded with a passion for culinary excellence, Qitchen's journey
            began in the heart of Prague. Over years, it evolved into a haven
            for sushi enthusiasts, celebrated for its artful mastery and
            devotion to redefining gastronomy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutright;
