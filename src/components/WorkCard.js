import React from "react";
import "../static/css/WorkExperience.css";

export default function ExperienceCard({ cardInfo }) {
  const GetDescBullets = ({ descBullets }) => {
    console.log(descBullets);
    return descBullets
      ? descBullets.map((item) => <li className="">{item}</li>)
      : null;
  };

  return (
    <a href={cardInfo.companyLink} target="_blank" rel="noopener noreferrer">
      <div className="experience-card">
        <div className="experience-banner">
          <div className="experience-blurred_div"></div>
          <div className="experience-div-company">
            <h5 className="experience-text-company">{cardInfo.company}</h5>
          </div>
          <img
            className="experience-roundedimg"
            src={cardInfo.logo}
            alt={cardInfo.company}
          />
        </div>
        <div className="experience-text-details">
          <h5 className="experience-text-role">{cardInfo.role}</h5>
          <h5 className="experience-text-date">{cardInfo.date}</h5>
          <p className="experience-text-desc">{cardInfo.desc}</p>
          <ul className="experience-text-desc-bullets">
            <GetDescBullets descBullets={cardInfo.descBullets} />
          </ul>
        </div>
      </div>
    </a>
  );
}
