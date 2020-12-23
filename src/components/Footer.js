import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="section fp-auto-height">
      <footer className="footer">
        <div className="social-media-div">
          <a
            href="mailto:diegom@alumni.cmu.edu"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-button mail"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span></span>
          </a>
          <a
            href="https://github.com/diegomtzg"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-button github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/diegomtzg/"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-button linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="footer-text">
          <Typography component="h6" variant="h6">
            {`© ${new Date().getFullYear()} Diego Martinez`}
          </Typography>
        </div>
      </footer>
    </div>
  );
}
