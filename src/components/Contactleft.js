import React from "react";
import "./contactleft.css";
import contactleft from "../assets/contact/contactleft.webp";

function Contactleft() {
  return (
    <div className="contact-left">
      <div className="contact-left-container">
        <img className="contact-left-picture" src={contactleft} />
        <p className="contact-left-text">CONTACT</p>
      </div>
    </div>
  );
}

export default Contactleft;
