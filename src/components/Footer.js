import React from "react";
import GitHubLogo from "../assets/images/githublogo.png";
import LinkedInLogo from "../assets/images/linkedinlogo.png";
import EmailLogo from "../assets/images/yahoo.png";

function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; 2023 Saray Sanchez</p>
      </div>
      <div className="logo-container">
        <a href="http://github.com/Ss0110">
          <img className="logo" src={GitHubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/saray-sanchez-a26251259/">
          <img className="logo" src={LinkedInLogo} alt="LinkedIn" />
        </a>
        <a href="mailto:saraysanchez01@yahoo.com">
          <img className="logo" src={EmailLogo} alt="Email" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
