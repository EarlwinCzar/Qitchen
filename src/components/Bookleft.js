import React from "react";
import bookleft from "../assets/book/bookleft.webp";
import "./bookleft.css";

function Bookleft() {
  return (
    <div className="book-left">
      <div className="book-left-container">
        <img className="book-left-picture" src={bookleft} />
        <p className="book-left-text">
          BOOK
          <br /> A TABLE
        </p>
      </div>
    </div>
  );
}

export default Bookleft;
