import React from "react";
import Navbar from "../../components/Navbar";
import Blogleft from "../../components/Blogleft.js";
import Blogright from "../../components/Blogright.js";
import "./blog.css";

function Blog() {
  return (
    <div className="blog-section container">
      <div className="blog-nav">
        <Navbar />
      </div>
      <div className="blog-section-container">
        <Blogleft />
        <Blogright />
      </div>
    </div>
  );
}

export default Blog;
