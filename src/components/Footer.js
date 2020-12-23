import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="section fp-auto-height">
      <footer className="footer">
        <Socials />
        <div className="footer-text">
          <Typography component="h6" variant="h6">
            {`© ${new Date().getFullYear()} Diego Martinez`}
          </Typography>
        </div>
      </footer>
    </div>
  );
}
