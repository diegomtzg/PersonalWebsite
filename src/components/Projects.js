import React from "react";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";
import {
  faCamera,
  faFileAlt,
  faTabletAlt,
  faDiceD20,
  faLaptopCode,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./cards/ProjectCard";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactGA from "react-ga";
import "../static/css/Projects.css";

export default function Projects() {
  return (
    <div className="section projects">
      <h2 className="section-heading">Projects</h2>
      <Fade bottom cascade>
        <div className="projects-grid">
          <ProjectCard
            projectInfo={{
              name: "HoyBoard",
              link: "https://github.com/diegomtzg/HoyBoard",
              icon: faTabletAlt,
              desc: "Daily information dashboard featuring weather, agenda, to-do list, now-playing music, news, emails and motivational quotes, all in one place.",
              skills: ["Web Dev", "SW Design"],
            }}
          />

          <ProjectCard
            projectInfo={{
              name: "InFrame",
              link: "https://github.com/diegomtzg/InFrame",
              icon: faCamera,
              desc: "Robotic camera system that uses real-time object detection to track user-selected targets across 3D space.",
              skills: ["Computer Vision", "Robotics"],
            }}
          />
          <ProjectCard
            projectInfo={{
              name: "Scotty3D",
              link: "https://github.com/CMU-Graphics/Scotty3D",
              icon: faDiceD20,
              desc: "3D graphics package built from scratch with interactive mesh editing, realistic path tracing and dynamic animation.",
              skills: ["Graphics"],
            }}
          />
          <ProjectCard
            projectInfo={{
              name: "Vitae",
              link: "https://github.com/diegomtzg/Vitae",
              icon: faFileAlt,
              desc: "Full stack web platform where users can generate custom, modular profiles for their professional experiences to share with recruiters.",
              skills: ["Web Dev"],
            }}
          />

          <ProjectCard
            projectInfo={{
              name: "CDC WonderPy",
              link: "https://github.com/diegomtzg/CDC-WonderPy",
              icon: faHeartbeat,
              desc: "An API designed to improve the CDC WONDER API and provide better programatic access to the CDC's datasets.",
              skills: ["SW Design"],
            }}
          />

          <ProjectCard
            projectInfo={{
              name: "ScreenBacklight",
              link: "https://github.com/diegomtzg/ScreenBacklight",
              icon: faLaptopCode,
              desc: "Ambient lighting system with multiple operation modes to enhance movie viewing and music listening experience.",
              skills: ["Embedded Systems", "SW Design"],
            }}
          />
        </div>

        <div className="more-projects">
          <ReactGA.OutboundLink
            eventLabel="Socials: Github [from Projects]"
            to="https://github.com/diegomtzg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="section-button">
              <FontAwesomeIcon className="more-icon" icon={faGithub} />
              View More Projects
            </Button>
          </ReactGA.OutboundLink>
        </div>
      </Fade>
    </div>
  );
}
