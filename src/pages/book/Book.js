import React from "react";
import Bookleft from "../../components/Bookleft";
import Bookright from "../../components/Bookright";
import Navbar from "../../components/Navbar";
import "./book.css";

function Book() {
  return (
    <div className="book-section container">
      <div className="book-nav">
        <Navbar />
      </div>
      <div className="book-section-container">
        <Bookleft />
        <Bookright />
      </div>
    </div>
  );
}

export default Book;
