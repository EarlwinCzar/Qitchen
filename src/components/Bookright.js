import React from "react";
import "./bookright.css";

function Bookright() {
  return (
    <div className="book-right">
      <div className="book-right-header">
        <h3>RESERVATION</h3>
        <p>
          Secure your spot at Qitchen, where exceptional sushi and a<br />{" "}
          remarkable dining experience await.
        </p>
      </div>
      <div className="book-right-body">
        <input placeholder="Name" className="book-right-body-name" />
        <input placeholder="Email" className="book-right-body-email" />
        <textarea placeholder="Message" className="book-right-body-msg" />
        <button>Reserve</button>
      </div>
    </div>
  );
}

export default Bookright;
