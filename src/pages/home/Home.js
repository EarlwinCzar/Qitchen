import React from "react";
import Navbar from "../../components/Navbar";
import Homecard from "../../components/Homecard";
import Homevid from "../../components/Homevid";
import "./home.css";

function Home() {
  return (
    <div className="home container">
      <Navbar />
      <div className="home-container">
        <Homevid />
        <Homecard />
      </div>
    </div>
  );
}

export default Home;
