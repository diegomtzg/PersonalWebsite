import React from "react";
import "../static/css/WorkExperience.css";
import googleLogo from "../assets/images/googleLogo.png";

export default function ExperienceCard({ cardInfo }) {
  return (
    <div className="experience-card">
      <div
        style={{ background: "rgba(0, 0, 0, 1)" }}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
        <img
          className="experience-roundedimg"
          src={googleLogo}
          alt={cardInfo.company}
        />
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role">{cardInfo.role}</h5>
        <h5 className="experience-text-date">{cardInfo.date}</h5>
        <p className="experience-text-desc">{cardInfo.desc}</p>
        <ul>
          <li>Did this and that</li>
        </ul>
      </div>
    </div>
  );
}
