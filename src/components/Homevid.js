import React, { useRef, useEffect } from "react";
import "./homevid.css";
import homeVid from "../assets/homeVid.mp4";

function Homevid() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play().catch((error) => {
        console.error("Failed to play the video:", error);
      });
    }
  };

  return (
    <div className="homevid-wrapper">
      <div className="homevid">
        <video
          ref={videoRef}
          src={homeVid}
          type="video/mp4"
          width="100%"
          height="120%"
          loop
          muted
          autoPlay
          playsInline
          className="background-video">
          Your browser does not support the video tag.
        </video>
        <p className="homevid-title">
          SUSHI
          <br /> SENSATION
        </p>
        <div className="homevid-socs">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Homevid;
