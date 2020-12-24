import { React } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from "react-ga";

export default function Socials({ noLeft }) {
  return (
    <div className="social-media-div">
      <ReactGA.OutboundLink
        eventLabel="Socials: Email"
        to="mailto:diegom@alumni.cmu.edu"
        target="_blank"
        rel="noopener noreferrer"
        className={noLeft ? "icon-button mail first" : "icon-button mail"}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span></span>
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Socials: Github"
        to="https://github.com/diegomtzg"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-button github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Socials: LinkedIn"
        to="https://www.linkedin.com/in/diegomtzg/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-button linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </ReactGA.OutboundLink>
    </div>
  );
}
