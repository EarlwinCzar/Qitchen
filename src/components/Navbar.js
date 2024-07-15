import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import ModalComponent from "./ModalComponent.js";

const Navbar = () => {
  return (
    <header className="nav-header">
      <nav className="nav-header-nav">
        <ul>
          <li className="nav-burger">
            <ModalComponent />
          </li>
          <li className="nav-home">
            <Link to="/" className="nav-link">
              {" "}
              {/* Added className for styling */}
              QITCHEN
            </Link>
          </li>
          <li className="nav-menu">
            <Link to="/menu" className="nav-link">
              <button className="nav-list menu-button">MENU</button>
            </Link>
          </li>
          <li className="nav-about">
            <Link to="/about" className="nav-link">
              <button className="nav-list about-button">ABOUT</button>
            </Link>
          </li>
          <li className="nav-book">
            <Link to="/book" className="nav-link">
              <button className="nav-list book-button">BOOK A TABLE</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
