import React from "react";
import Slide from "react-reveal/Slide";
import cmuLogo from "../static/images/CMU.jpg";
import EducationCard from "./cards/EducationCard";
import "../static/css/Education.css";

export default function Education() {
  return (
    <div className="section education">
      <h2 className="section-heading">Education</h2>
      <div className="education-card-container">
        <Slide left>
          <EducationCard
            schoolInfo={{
              name: "Carnegie Mellon University",
              logo: cmuLogo,
              degree:
                "Master of Science in Electrical and Computer Engineering",
              dates: "August 2020 - May 2021",
              bulletsTitle: "Concentrations:",
              bullets: [
                "Software Engineering: Large-scale Software Design, API Design, Human-centered Software, Client Architecture.",
                "Other: Computer Graphics, Computer Vision and User-Focused Sensing Systems.",
              ],
            }}
          />
        </Slide>
        <Slide right>
          <EducationCard
            schoolInfo={{
              name: "Carnegie Mellon University",
              logo: cmuLogo,
              degree:
                "Bachelor of Science in Electrical and Computer Engineering",
              dates: "August 2016 - May 2020",
              bulletsTitle: "Software Track | Graduated with University Honors",
            }}
          />
        </Slide>
      </div>
    </div>
  );
}
