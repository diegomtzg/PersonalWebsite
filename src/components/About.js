import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import emoji from "react-easy-emoji";
import Fade from "react-reveal/Fade";
import profilePic from "../assets/images/AboutPic.jpg";
import Socials from "./Socials";
import { makeStyles } from "@material-ui/core/styles";
import "../static/css/About.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className="section about">
      <div className="about-container">
        <div className="about-left">
          {/* https://www.react-reveal.com/docs/ */}
          <Fade left>
            <h2 className="about-greeting">
              Hi! I'm Diego <span className="wave-emoji">{emoji("👋🏼")}</span>
            </h2>
            <Typography variant="h4" align="justify">
              I’m a software engineer with a passion for integrating technology
              into society and a firm believer in its ability to enhance human
              experiences.
            </Typography>
            <br />
            <Typography variant="h4" align="justify">
              I constantly seek opportunities to work on projects that reshape
              how the world will interact with technology in the future. By
              doing research in computer vision and artificial intelligence,
              implementing intuitive teleoperation interfaces for robots and
              designing human-centered features for large-scale software
              platforms, I’ve witnessed first-hand how technology can empower
              people to live more fulfilling lives.
            </Typography>
            <br />
            <Typography variant="h4" align="justify">
              What we make reflects who we are, so I’m passionate about finding
              ways of moving technology forward in the right ways, by augmenting
              – not replacing – human experiences.
              <Socials noLeft />
            </Typography>
          </Fade>
        </div>
        <div className="about-right">
          <Fade right>
            <Avatar
              className={classes.large + " about-avatar"}
              src={profilePic}
              alt="Diego Martinez"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
