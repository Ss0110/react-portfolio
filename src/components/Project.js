import React from "react";

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project1">
      <img src={image} alt="fitness" />
      <div className="fitness-community">
        <h3>{title}</h3>
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            View App
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
