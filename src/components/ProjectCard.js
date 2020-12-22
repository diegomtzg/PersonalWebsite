import React from "react";
import "../static/css/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({ projectInfo }) {
  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => <li className="">{item}</li>)
      : null;
  };

  return (
    <a href={projectInfo.link} target="_blank" rel="noopener noreferrer">
      <div className="experience-card">
        <div className="experience-banner">
          <div className="experience-blurred_div"></div>
          <div className="experience-div-company">
            <h5 className="experience-text-company">{projectInfo.name}</h5>
          </div>
          <FontAwesomeIcon
            className="experience-icon"
            icon={projectInfo.icon}
            size="2x"
          />
        </div>
        <div className="experience-text-details">
          <p className="experience-text-desc">{projectInfo.desc}</p>
          <ul className="experience-text-desc-bullets">
            <GetDescBullets descBullets={projectInfo.descBullets} />
          </ul>
        </div>
      </div>
    </a>
  );
}
