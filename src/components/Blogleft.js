import React from "react";
import blogleft from "../assets/blog/blogleft.webp";
import "./blogleft.css";

function Blogleft() {
  return (
    <div className="blog-left">
      <div className="blog-left-container">
        <img className="blog-left-picture" src={blogleft} />
        <p className="blog-left-text">BLOG</p>
      </div>
    </div>
  );
}

export default Blogleft;
