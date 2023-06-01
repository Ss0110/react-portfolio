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
        <h3>Education</h3>
        <ul>
          <li>
            Certification in Web Development, UC BerkeleyExtension Bootcamp
          </li>
        </ul>
      </div>
      <div>
        <h3>Work Experience</h3>
        <ul>
          <li></li>
        </ul>
      </div>
      <div>
        <h3>Skills</h3>
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
      <div>
        <h3>References</h3>
        <p>Available upon request</p>
      </div>
    </section>
  );
}

export default Resume;
