import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Fade, Slide, Zoom } from "react-reveal";
import "../static/css/Education.css";

export default function EducationCard({ schoolInfo }) {
  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => <li className="subTitle">{item}</li>)
      : null;
  };

  return (
    <div>
      <div className="education-card">
        <div className="education-card-left">
          <img
            className="education-roundedimg"
            src={schoolInfo.logo}
            alt={schoolInfo.name}
          />
        </div>
        <div className="education-card-right">
          <h5 className="education-text-school">{schoolInfo.name}</h5>

          <div className="education-text-details">
            <h5 className="education-text-subHeader">{schoolInfo.degree}</h5>
            <p className="education-text-duration">{schoolInfo.dates}</p>
            <p className="education-text-desc">{schoolInfo.bulletsTitle}</p>
            <div className="education-text-bullets">
              <ul>
                <GetDescBullets descBullets={schoolInfo.bullets} />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
