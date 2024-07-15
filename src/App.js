import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css"; // Import your global CSS for animations
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import About from "./pages/about/About";
import Book from "./pages/book/Book";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
