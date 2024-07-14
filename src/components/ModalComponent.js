import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.css"; // Example CSS file for modal styles
import { Link, useNavigate } from "react-router-dom";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const MyModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNavigation = (path) => {
    closeModal();
    navigate(path);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button className="nav-ham" onClick={openModal}>
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Modal component from react-modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay">
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <nav className="modal-nav">
          <ul>
            <li className="modal-menu">
              <button
                className="nav-list"
                onClick={() => handleNavigation("/")}>
                HOME
              </button>
            </li>
            <li className="modal-menu">
              <button
                className="nav-list"
                onClick={() => handleNavigation("/menu")}>
                MENU
              </button>
            </li>
            <li className="modal-book">
              <button
                className="nav-list"
                onClick={() => handleNavigation("/book")}>
                RESERVATION
              </button>
            </li>
            <li className="modal-about">
              <button
                className="nav-list"
                onClick={() => handleNavigation("/about")}>
                ABOUT
              </button>
            </li>
            <li className="modal-contact">
              <button
                className="nav-list"
                onClick={() => handleNavigation("/contact")}>
                CONTACT
              </button>
            </li>
            <li className="modal-blog">
              <button
                className="nav-list"
                onClick={() => handleNavigation("/blog")}>
                BLOG
              </button>
            </li>
          </ul>
        </nav>
      </Modal>
    </div>
  );
};

export default MyModal;
