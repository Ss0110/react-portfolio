import React from "react";

function Portfolio({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project1">
      <img src="src\assets\images\working-app-demo.gif" alt="fitness" />
      <div className="fitness-community">
        <h3>{title}</h3>
        <div className="project-links">
          <a
            href="https://408broncos.github.io/fitness-community"
            target="_blank"
            rel="noopener noreferrer"
          >
            View App
          </a>
          <a
            href="https://github.com/408broncos/fitness-community"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
