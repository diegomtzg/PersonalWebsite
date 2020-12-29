import React from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import {
  faMemory,
  faCogs,
  faBrain,
  faDiceD20,
  faLaptopCode,
  faToolbox,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from "react-ga";
import Button from "@material-ui/core/Button";
import "../static/css/Skills.css";
import SkillCard from "./cards/SkillCard";

export default function Skills() {
  return (
    <div className="section skills">
      <Typography className="section-heading" component="h2" variant="h2">
        Skills
      </Typography>
      <Fade bottom cascade>
        <div className="skills-grid">
          <SkillCard
            skillInfo={{
              name: "Computer Graphics",
              proficiency: "Intermediate",
              icon: faDiceD20,
              color: "#ff7b00",
              details:
                "Photorealistic Rendering, Subdivision Modeling, Animation, OpenGL",
            }}
          />
          <SkillCard
            skillInfo={{
              name: "Deep Learning",
              proficiency: "Intermediate",
              icon: faBrain,
              color: "#ff0044",
              details:
                "Computer Vision, Machine Learning, Generative Models, Image Synthesis",
            }}
          />

          <SkillCard
            skillInfo={{
              name: "Computer Systems",
              proficiency: "Advanced",
              icon: faMemory,
              color: "#bd8b04",
              details:
                "Network Protocols, Distributed Systems, Real-Time Kernels, Drivers, ARM Assembly",
            }}
          />

          <SkillCard
            skillInfo={{
              name: "Web Development",
              proficiency: "Advanced",
              icon: faLaptopCode,
              color: "#aa00ff",
              details:
                "HTML5, CSS3, Javascript, Bootstrap, jQuery, AJAX, React, Django, NodeJS",
            }}
          />
          <SkillCard
            skillInfo={{
              name: "Software Engineering",
              proficiency: "Advanced",
              icon: faCogs,
              color: "#fff",
              details:
                "API Design, Object-Oriented Design, Human-centered Software, Cloud Computing",
            }}
          />
          <SkillCard
            skillInfo={{
              name: "Other Technologies",
              proficiency: "Advanced",
              icon: faToolbox,
              color: "#04d12d",
              details:
                "C/C++, Python, Java, Golang, Bash, SQL, Git, OpenCV, MATLAB, Arduino",
            }}
          />
        </div>

        <div className="more-projects">
          <ReactGA.OutboundLink
            eventLabel="Resume"
            to="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <FontAwesomeIcon className="more-icon" icon={faDownload} />
              Download Resume
            </Button>
          </ReactGA.OutboundLink>
        </div>
      </Fade>
    </div>
  );
}
