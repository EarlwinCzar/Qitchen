import React from "react";
import Navbar from "../../components/Navbar";
import Contactleft from "../../components/Contactleft";
import Contactright from "../../components/Contactright";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-section container">
      <div className="contact-nav">
        <Navbar />
      </div>
      <div className="contact-section-container">
        <Contactleft />
        <Contactright />
      </div>
    </div>
  );
}

export default Contact;
