import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import emoji from "react-easy-emoji";
import Fade from "react-reveal/Fade";
import profilePic from "../assets/images/AboutPic.png";
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
            <Typography className="about-greeting" variant="h2" align="left">
              Hi! I'm Diego <span className="wave-emoji">{emoji("👋🏼")}</span>
            </Typography>
            <Typography variant="h4" align="left">
              I’m a software engineer with a passion for finding ways to
              integrate technology into society and a firm believer in its
              ability to enhance human experiences.
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
