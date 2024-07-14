import React, { useState } from "react";
import "./aboutcaro1.css";
import caro1 from "../assets/about/caro2/caro1.webp";
import caro2 from "../assets/about/caro2/caro2.webp";
import caro3 from "../assets/about/caro2/caro3.webp";

const images = [caro1, caro2, caro3];

function Aboutcaro2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={prevSlide} className="carousel-button-left">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button onClick={nextSlide} className="carousel-button-right">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Aboutcaro2;
