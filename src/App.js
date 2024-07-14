import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import About from "./pages/about/About";
import Book from "./pages/book/Book";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import "./App.css"; // Import your CSS file for animations

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
