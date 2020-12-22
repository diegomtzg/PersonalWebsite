import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Fade, Slide, Zoom } from "react-reveal";
import cmuLogo from "../assets/images/CMU.png";
import EducationCard from "./EducationCard";
import "../static/css/Education.css";

export default function Education() {
  return (
    <div className="section education">
      <div className="education-card-container">
        <Fade left duration={1000}>
          <EducationCard
            schoolInfo={{
              name: "Carnegie Mellon University",
              logo: cmuLogo,
              degree:
                "Master of Science in Electrical and Computer Engineering",
              dates: "August 2020 - May 2021",
              bulletsTitle: "Concentrations:",
              bullets: [
                "Software Engineering: Large-scale Software Design, API Design, Human-centered Software.",
                "Computational Imaging: Computer Graphics, Computer Vision and Learning-based Image Synthesis.",
              ],
            }}
          />
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
        </Fade>
      </div>
    </div>
  );
}
