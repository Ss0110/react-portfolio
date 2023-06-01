import React from "react";

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div>
        <a href="/path/to/resume.pdf" download>
          Download Resume
        </a>
      </div>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Databases (MySQL, MongoDB)</li>
          <li>Testing (Jest)</li>
          <li>Version Control (Git)</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
