import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faRobot,
  faShapes,
  faLaptopCode,
  faHeartbeat,
  faDraftingCompass,
  faMemory,
} from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga";

export default function ProjectCard({ projectInfo }) {
  const GetSkills = ({ skills }) => {
    if (skills) {
      return skills.map((skill) => {
        var icon, color;
        switch (skill) {
          case "Computer Vision":
            icon = faEye;
            color = "deepskyblue";
            break;
          case "Robotics":
            icon = faRobot;
            color = "darkred";
            break;
          case "Web Dev":
            icon = faLaptopCode;
            color = "mediumorchid";
            break;
          case "Graphics":
            icon = faShapes;
            color = "orangered";
            break;
          case "SW Design":
            icon = faDraftingCompass;
            color = "lawngreen";
            break;
          case "Embedded Systems":
            icon = faMemory;
            color = "gold";
            break;

          default:
            icon = faHeartbeat;
            color = "gray";
            break;
        }
        return (
          <div key={skill} className="project-left-tag">
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
    <ReactGA.OutboundLink
      eventLabel={"Project: " + projectInfo.name}
      to={projectInfo.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-card-div">
        <div className="project-name-div">
          <p className="project-name">
            <FontAwesomeIcon
              className="project-icon"
              icon={projectInfo.icon}
              size="1x"
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
    </ReactGA.OutboundLink>
  );
}
