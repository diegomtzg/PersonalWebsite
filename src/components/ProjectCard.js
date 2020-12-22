import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({ projectInfo }) {
  return (
    <a href={projectInfo.link} target="_blank" rel="noopener noreferrer">
      <div className="project-card-div">
        <div className="project-name-div">
          <p className="project-name">
            <FontAwesomeIcon
              className="project-icon"
              icon={projectInfo.icon}
              size="md"
            />
            {projectInfo.name}
          </p>
        </div>
        <p className="project-description">{projectInfo.desc}</p>
        <div className="project-stats">
          <div className="project-left-stat">
            <span className="project-left-tag">
              <FontAwesomeIcon
                className="project-left-icon"
                color={projectInfo.skillColor}
                icon={projectInfo.skillIcon}
                size="lg"
              />
              Skill
            </span>
          </div>
          <div className="project-right-tag">diskUsage KB</div>
        </div>
      </div>
    </a>
  );
}
