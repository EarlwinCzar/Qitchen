import React from "react";
import "./blogright.css";
import Blogpost from "./Blogpost";

function Blogright() {
  return (
    <div className="blog-right">
      <section className="blog-right-container">
        <h4 className="blog-right-title">LATEST NEWS</h4>
        <Blogpost />
      </section>
    </div>
  );
}

export default Blogright;
