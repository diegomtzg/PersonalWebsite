import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillCard({ skillInfo }) {
  return (
    <div className="project-card-div">
      <div className="project-name-div">
        <p className="project-name">
          <FontAwesomeIcon
            className="project-icon"
            icon={skillInfo.icon}
            size="md"
          />
          {skillInfo.name}
        </p>
      </div>
      <p className="project-description">{skillInfo.desc}</p>
    </div>
  );
}
