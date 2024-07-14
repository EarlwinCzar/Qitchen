import React from "react";
import rightimg1 from "../assets/contact/rightimg1.jpeg";
import rightimg2 from "../assets/contact/rightimg2.jpeg";
import rightimg3 from "../assets/contact/rightimg3.jpeg";
import rightimg4 from "../assets/contact/rightimg4.webp";
import "./contactright.css";
import Map from "./Map.js";

function Contactright() {
  return (
    <div className="contact-right">
      <div className="contact-wrapper-1">
        <div className="contact-wrapper-1-left">
          <h4>OPENING HOURS</h4>
          <div className="contact-wrapper-1-left-times">
            <div className="contact-wrapper-1-left-time">
              <p>Monday</p>
              <p>16:00 - 22:30</p>
            </div>
            <div className="contact-wrapper-1-left-time">
              <p>Tuesday</p>
              <p>16:00 - 22:30</p>
            </div>
            <div className="contact-wrapper-1-left-time">
              <p>Wednesday</p>
              <p>16:00 - 22:30</p>
            </div>
            <div className="contact-wrapper-1-left-time">
              <p>Thursday</p>
              <p>16:00 - 22:30</p>
            </div>
            <div className="contact-wrapper-1-left-time">
              <p>Friday</p>
              <p>16:00 - 22:30</p>
            </div>
            <div className="contact-wrapper-1-left-time">
              <p>Sat & Sun</p>
              <p>16:00 - 22:30</p>
            </div>
          </div>
        </div>
        <div className="contact-wrapper-1-right">
          <div className="contact-wrapper-1-right-top">
            <img src={rightimg1} />
            <img src={rightimg2} />
          </div>
          <div className="contact-wrapper-1-right-bottom">
            <img src={rightimg3} />
            <img src={rightimg4} />
          </div>
        </div>
      </div>
      <div className="contact-wrapper-2">
        <div className="contact-wrapper-2-left">
          <Map />
          <div className="contact-wrapper-2-button">
            <a href="https://www.google.com/maps/search/23+Greenfield+Avenue,+Prague+120+00/@50.0760032,14.4098181,14z/data=!3m1!4b1?entry=ttu">
              SHOW MORE
            </a>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="contact-wrapper-2-right">
          <h4>GET IN TOUCH</h4>
          <div className="contact-wrapper-2-right-details">
            <div className="contact-wrapper-2-right-detail">
              <p>ADDRESS</p>
              <p>23 Greenfield Avenue, Prague 120 00</p>
            </div>
            <div className="contact-wrapper-2-right-detail">
              <p>PHONE</p>
              <p>+42 1234 567890</p>
            </div>
            <div className="contact-wrapper-2-right-detail">
              <p>EMAIL</p>
              <p>hello@example.com</p>
            </div>
            <div className="contact-wrapper-2-right-detail">
              <p>FOLLOW</p>
              <div className="contact-wrapper-2-right-socs">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactright;
