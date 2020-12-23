import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Fade, Slide, Zoom } from "react-reveal";
import "../static/css/Education.css";

export default function EducationCard({ schoolInfo }) {
  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => (
          <li className="subTitle">
            <Typography component="p" variant="p">
              {item}
            </Typography>
          </li>
        ))
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
          <Typography component="h4" variant="h4">
            <strong>{schoolInfo.name}</strong>
          </Typography>

          <div className="education-text-details">
            <Typography component="h5" variant="h5">
              {schoolInfo.degree}
            </Typography>
            <Typography
              className="education-bullets-title"
              component="p"
              variant="p"
            >
              <strong>{schoolInfo.dates}</strong>
            </Typography>
            <Typography
              className="education-bullets-title"
              component="p"
              variant="p"
            >
              {schoolInfo.bulletsTitle}
            </Typography>
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
