import React from "react";
import ReactGA from "react-ga";

export default function ExperienceCard({ cardInfo }) {
  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => (
          <li key={item} className="">
            {item}
          </li>
        ))
      : null;
  };

  return (
    <ReactGA.OutboundLink
      eventLabel={"Work: " + cardInfo.company + " - " + cardInfo.role}
      to={cardInfo.companyLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="experience-card">
        <h5 className="experience-company">{cardInfo.company}</h5>
        <img
          className="experience-img"
          src={cardInfo.logo}
          alt={cardInfo.company}
        />
        <div className="experience-text-details">
          <h5 className="experience-text-role">{cardInfo.role}</h5>
          <h5 className="experience-text-date">{cardInfo.date}</h5>
          <p className="experience-text-desc">{cardInfo.desc}</p>
          <ul className="experience-text-desc-bullets">
            <GetDescBullets descBullets={cardInfo.descBullets} />
          </ul>
        </div>
      </div>
    </ReactGA.OutboundLink>
  );
}
