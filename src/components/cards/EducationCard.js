import React from "react";
import Typography from "@material-ui/core/Typography";
import { Slide } from "react-reveal";

export default function EducationCard({ schoolInfo }) {
  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => (
          <li key={item}>
            <Typography component="p" variant="body1">
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
            <Typography className="education-bullets-title" component="body1">
              <strong>{schoolInfo.dates}</strong>
              <br />
            </Typography>
            <Typography className="education-bullets-title" component="body1">
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
        <div className="education-card-border" />
      </Slide>
    </div>
  );
}
