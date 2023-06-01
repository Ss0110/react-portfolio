import React, { useState } from "react";
import Image from "../assets/images/fitn.png";
import GifImage from "../assets/images/AppDemo.gif";
import Stream from "../assets/images/stream.png";
import Streemy from "../assets/images/streemy.gif";

function Portfolio({ title, deployedLink, repoLink }) {
  const [hoveredFit, setHoveredFit] = useState(false);
  const [hoveredStream, setHoveredStream] = useState(false);

  const handleFitMouseEnter = () => {
    setHoveredFit(true);
  };

  const handleFitMouseLeave = () => {
    setHoveredFit(false);
  };

  const handleStreamMouseEnter = () => {
    setHoveredStream(true);
  };

  const handleStreamMouseLeave = () => {
    setHoveredStream(false);
  };

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section>
      <h2 className="portfolio">Portfolio</h2>
      <div className="project1">
        <img
          className="Fit"
          src={hoveredFit ? GifImage : Image}
          alt={title}
          onMouseEnter={handleFitMouseEnter}
          onMouseLeave={handleFitMouseLeave}
          onClick={() =>
            handleImageClick("https://408broncos.github.io/fitness-community")
          }
        />
        <div className="project-details">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="project2">
        <img
          className="Streemy"
          src={hoveredStream ? Streemy : Stream}
          alt={Streemy}
          onMouseEnter={handleStreamMouseEnter}
          onMouseLeave={handleStreamMouseLeave}
          onClick={() =>
            handleImageClick("https://young-tor-26363.herokuapp.com/")
          }
        />
      </div>
    </section>
  );
}

export default Portfolio;
