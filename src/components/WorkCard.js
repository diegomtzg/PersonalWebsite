import React from "react";
import "../static/css/WorkExperience.css";
import googleLogo from "../assets/images/Google.png";
import xLogo from "../assets/images/X.png";
import microsoftLogo from "../assets/images/Microsoft.png";
import cmuLogo from "../assets/images/CMU_Red.png";

export default function ExperienceCard({ cardInfo }) {
  const GetDescBullets = ({ descBullets }) => {
    console.log(descBullets);
    return descBullets
      ? descBullets.map((item) => <li className="">{item}</li>)
      : null;
  };

  var logo;
  switch (cardInfo.company) {
    case "Google":
      logo = googleLogo;
      break;
    case "Google[X]":
      logo = xLogo;
      break;
    case "Microsoft":
      logo = microsoftLogo;
      break;
    case "Carnegie Mellon University":
      logo = cmuLogo;
      break;
    default:
      logo = cmuLogo;
  }

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
            src={logo}
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
