import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slide from "react-reveal/Slide";
import {
  faCamera,
  faFileAlt,
  faTabletAlt,
  faDiceD20,
  faLaptopCode,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/css/Projects.css";
import ProjectCard from "./cards/ProjectCard";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactGA from "react-ga";

export default function Projects() {
  return (
    <div className="section projects">
      <Typography className="section-heading" component="h2" variant="h2">
        Projects
      </Typography>
      <Slide left>
        <div className="projects-grid">
          <ProjectCard
            projectInfo={{
              name: "InFrame",
              link: "https://github.com/diegomtzg/InFrame",
              icon: faCamera,
              desc:
                "Robotic camera that uses real-time object detection to track user-selected targets.",
              skills: ["Computer Vision", "Robotics"],
            }}
          />

          <ProjectCard
            projectInfo={{
              name: "Vitae",
              link: "https://github.com/diegomtzg/Vitae",
              icon: faFileAlt,
              desc:
                "Full stack web-application that lets users easily create beautiful online portfolios to showcase their professional experiences.",
              skills: ["Web Dev"],
            }}
          />

          <ProjectCard
            projectInfo={{
              name: "Scotty3D",
              link: "",
              icon: faDiceD20,
              desc:
                "3D graphics software built from scratch featuring interactive mesh editing, realistic path tracing and dynamic animation.",
              skills: ["Graphics"],
            }}
          />

          <ProjectCard
            projectInfo={{
              name: "CDC WonderPy",
              link: "https://github.com/diegomtzg/CDC-WonderPy",
              icon: faHeartbeat,
              desc:
                "An API wrapper designed to improve access to the CDC's WONDER database.",
              skills: ["SW Design"],
            }}
          />

          <ProjectCard
            projectInfo={{
              name: "MirrorX",
              link: "https://github.com/diegomtzg/MirrorX",
              icon: faTabletAlt,
              desc:
                "Smart mirror with facial recognition login that pulls daily info from various public APIs.",
              skills: ["Computer Vision", "SW Design"],
            }}
          />

          <ProjectCard
            projectInfo={{
              name: "ScreenBacklight",
              link: "https://github.com/diegomtzg/ScreenBacklight",
              icon: faLaptopCode,
              desc:
                "Ambient lighting system to enhance movie viewing and music listening experience.",
              skills: ["Embedded Systems", "SW Design"],
            }}
          />
        </div>
      </Slide>
      <div className="more-projects">
        <ReactGA.OutboundLink
          eventLabel="Socials: Github [from Projects]"
          to="https://github.com/diegomtzg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <FontAwesomeIcon className="more-icon" icon={faGithub} />
            View More Projects
          </Button>
        </ReactGA.OutboundLink>
      </div>
    </div>
  );
}
