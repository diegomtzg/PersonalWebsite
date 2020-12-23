import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faRobot,
  faLaptopCode,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ projectInfo }) {
  const GetSkills = ({ skills }) => {
    if (skills) {
      return skills.map((skill) => {
        var icon, color;
        switch (skill) {
          case "Computer Vision":
            icon = faEye;
            color = "#00e1ff";
            break;
          case "Robotics":
            icon = faRobot;
            color = "red";
            break;
          case "Web Dev":
            icon = faLaptopCode;
            color = "purple";
            break;
          default:
            icon = faHeartbeat;
            color = "gray";
            break;
        }
        return (
          <div className="project-left-tag">
            <FontAwesomeIcon
              className="project-left-icon"
              icon={icon}
              color={color}
              size="lg"
            />
            {skill}
          </div>
        );
      });
    } else return null;
  };

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
            <GetSkills skills={projectInfo.skills} />
          </div>
          <div className="project-right-tag">{projectInfo.date}</div>
        </div>
      </div>
    </a>
  );
}
