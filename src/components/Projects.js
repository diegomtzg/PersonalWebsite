import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  faCamera,
  faFileAlt,
  faShapes,
  faTabletAlt,
  faDiceD20,
  faLaptopCode,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import "../static/css/Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="section projects">
      <Typography className="section-heading" component="h2" variant="h2">
        Projects
      </Typography>
      <div className="projects-grid">
        <ProjectCard
          projectInfo={{
            name: "InFrame",
            link: "https://github.com/diegomtzg/InFrame",
            icon: faCamera,
            skillIcon: faCamera,
            skillColor: "red",
            desc:
              "Robotic camera that uses real-time object detection to track user-selected targets.",
            descBullets: ["Bullet 1"],
          }}
        />

        <ProjectCard
          projectInfo={{
            name: "Vitae",
            link: "https://github.com/diegomtzg/Vitae",
            icon: faFileAlt,
            desc:
              "Full stack web-application that lets users easily create beautiful online portfolios to showcase their professional experiences.",
            descBullets: ["Bullet 1"],
          }}
        />

        <ProjectCard
          projectInfo={{
            name: "Scotty3D",
            link: "",
            icon: faDiceD20,
            desc:
              "3D graphics software built from scratch: Features include: Interactive mesh editing, realistic path tracing and dynamic animation.",
            descBullets: ["Bullet 1"],
          }}
        />

        <ProjectCard
          projectInfo={{
            name: "MirrorX",
            link: "https://github.com/diegomtzg/MirrorX",
            icon: faTabletAlt,
            desc:
              "Smart mirror with facial recognition login that pulls daily info from various public APIs.",
            descBullets: ["Bullet 1"],
          }}
        />

        <ProjectCard
          projectInfo={{
            name: "ScreenBacklight",
            link: "https://github.com/diegomtzg/ScreenBacklight",
            icon: faLaptopCode,
            desc:
              "Ambient lighting system to enhance movie viewing and music listening experience.",
            descBullets: ["Bullet 1"],
          }}
        />

        <ProjectCard
          projectInfo={{
            name: "CDC WonderPy",
            link: "https://github.com/diegomtzg/CDC-WonderPy",
            icon: faHeartbeat,
            desc:
              "An API wrapper designed to improve access to the CDC's WONDER database.",
            descBullets: ["Bullet 1"],
          }}
        />
      </div>
    </div>
  );
}
