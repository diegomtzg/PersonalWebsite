import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Socials({ noLeft }) {
  return (
    <div className="social-media-div">
      <a
        href="mailto:diegom@alumni.cmu.edu"
        target="_blank"
        rel="noopener noreferrer"
        className={noLeft ? "icon-button mail first" : "icon-button mail"}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span></span>
      </a>
      <a
        href="https://github.com/diegomtzg"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-button github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/diegomtzg/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-button linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}
