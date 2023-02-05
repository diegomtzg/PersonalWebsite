import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Fade from "react-reveal/Fade";
import profilePic from "../static/images/AboutPic.jpg";
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
          {/* emoji src down (https://twemoji.maxcdn.com/2/72x72/1f44b-1f3fc.png */ }
          <Fade left>
            <h2 className="about-greeting">
              Hi! I'm Diego{" "}
              <img
                className="wave-emoji"
                alt="Wave Emoji"
                src="https://em-content.zobj.net/thumbs/120/twitter/322/waving-hand_1f44b.png"
              />
            </h2>
            <p className="about-text" align="left">
              I’m a software engineer with a passion for integrating technology
              into society and a firm believer in its ability to enhance human
              experiences.
              <br />
              <br />
              I constantly seek opportunities to work on projects that reshape
              how the world will interact with technology in the future. By
              doing research in computer vision and artificial intelligence,
              implementing intuitive teleoperation interfaces for robots and
              designing human-centered features for large-scale software
              platforms, I’ve witnessed first-hand how technology can empower
              people to live more fulfilling lives.
              <br />
              <br />
              What we make reflects who we are, so I’m passionate about finding
              ways of moving technology forward in the right direction, by augmenting
              – not replacing – human experiences.
            </p>
            <Socials noLeft />
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
