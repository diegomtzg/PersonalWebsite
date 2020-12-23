import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  faCamera,
  faFileAlt,
  faTabletAlt,
  faDiceD20,
  faLaptopCode,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            icon: faCamera,
            details:
              "API Design, Object-Oriented Design, Human-centered Software",
          }}
        />
      </div>
    </div>
  );
}
