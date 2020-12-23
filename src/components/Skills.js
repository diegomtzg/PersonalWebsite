import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  faMemory,
  faCogs,
  faBrain,
  faDiceD20,
  faLaptopCode,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import "../static/css/Skills.css";
import SkillCard from "./cards/SkillCard";

export default function Skills() {
  return (
    <div className="section skills">
      <Typography className="section-heading" component="h2" variant="h2">
        Skills
      </Typography>
      <div className="skills-grid">
        <SkillCard
          skillInfo={{
            name: "Software Engineering",
            proficiency: "Advanced",
            icon: faCogs,
            details:
              "API Design, Object-Oriented Design, Human-centered Software, Cloud Computing",
          }}
        />
        <SkillCard
          skillInfo={{
            name: "Web Development",
            proficiency: "Intermediate",
            icon: faLaptopCode,
            details:
              "HTML5, CSS3, Javascript, Bootstrap, jQuery, AJAX, React, Django, NodeJS",
          }}
        />
        <SkillCard
          skillInfo={{
            name: "Deep Learning",
            proficiency: "Intermediate",
            icon: faBrain,
            details:
              "Computer Vision, Machine Learning, Generative Models, Image Synthesis",
          }}
        />
        <SkillCard
          skillInfo={{
            name: "Computer Graphics",
            proficiency: "Intermediate",
            icon: faDiceD20,
            details:
              "Photorealistic Rendering, Subdivision Modeling, Animation, OpenGL",
          }}
        />
        <SkillCard
          skillInfo={{
            name: "Computer Systems",
            proficiency: "Intermediate",
            icon: faMemory,
            details:
              "Network Protocols, Distributed Systems, Real-Time Kernels, Drivers, ARM Assembly",
          }}
        />
        <SkillCard
          skillInfo={{
            name: "Other Technologies",
            proficiency: "Advanced",
            icon: faToolbox,
            details:
              "C/C++, Python, Java, Golang, Bash, SQL, Git, OpenCV, MATLAB, Arduino",
          }}
        />
      </div>
    </div>
  );
}
