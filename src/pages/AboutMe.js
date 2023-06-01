import React from "react";
import Avatar from "src/assets/images/avatar.png";

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <div>
        <img src={Avatar} alt="avatar" />
        <p>
          Hi, I'm Saray Sanchez, a full stack web development coding bootcamp
          student. Ever since I started learning about web development, I have
          been fascinated by the endless possibilities and potential that this
          field offers. I have been working hard to learn and master the
          technologies and tools necessary to build high-quality and dynamic web
          applications. As a full stack developer, I have experience with both
          front-end and back-end development, and I enjoy working with HTML,
          CSS, JavaScript, and various web development frameworks. I am
          constantly looking for new challenges and opportunities to further
          develop my skills and knowledge. Being a coding bootcamp student has
          been an exciting journey for me, and I am looking forward to applying
          my skills and knowledge to create amazing web projects. Feel free to
          browse through my portfolio to see some of the projects I've worked
          on. If you have any questions or would like to collaborate, please
          don't hesitate to reach out to me through the contact form or via
          email.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
