import React from "react";
import { Slide } from "react-reveal";

export default function EducationCard({ schoolInfo }) {
  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => (
          <li className="education-bullet" key={item}>
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div>
      <div className="education-card">
        <div className="school-info-div">
          <img
            className="education-img"
            src={schoolInfo.logo}
            alt={schoolInfo.name}
          />
          <h4 className="school-name-mobile">{schoolInfo.name}</h4>
        </div>
        <div className="degree-details-div">
          <h4 className="school-name">{schoolInfo.name}</h4>
          <h5 className="degree-name">{schoolInfo.degree}</h5>
          <p className="education-dates">
            {schoolInfo.dates}
            <br />
          </p>
          <p className="education-bullets-title">{schoolInfo.bulletsTitle}</p>
          <div className="education-text-bullets">
            <ul>
              <GetDescBullets descBullets={schoolInfo.bullets} />
            </ul>
          </div>
        </div>
      </div>
      <Slide left duration={2000}>
        <div className="education-card-border" />
      </Slide>
    </div>
  );
}
