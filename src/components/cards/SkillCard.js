import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
// import { faCircle } from "@fortawesome/free-regular-svg-icons";

export default function SkillCard({ skillInfo }) {
  const GetProficiencyWithColor = ({ proficiency }) => {
    var color;
    switch (proficiency) {
      case "Advanced":
        // color = "chocolate";
        color = "dodgerblue";
        break;
      case "Intermediate":
        // color = "peru";
        color = "peachpuff";
        break;
      case "Beginner":
        color = "paleturquoise";
        // color = "burlywood";
        break;
      default:
        color = "gray";
        break;
    }
    return (
      <p className="skill-proficiency" style={{ color: color }}>
        Experience: {proficiency}
      </p>
    );
  };

  return (
    <div className="skill-card-div">
      <div className="skill-left">
        <span className="fa-stack fa-3x">
          <FontAwesomeIcon
            className="fa-stack-2x"
            icon={faCircle}
            color="#3f3f3f8a"
          />
          <FontAwesomeIcon
            className="fa-stack-1x"
            icon={skillInfo.icon}
            color={skillInfo.color}
          />
        </span>
      </div>
      <div className="skill-right">
        <p className="skill-name">{skillInfo.name}</p>
        <GetProficiencyWithColor proficiency={skillInfo.proficiency} />
        <p className="skill-details">{skillInfo.details}</p>
      </div>
    </div>
  );
}
