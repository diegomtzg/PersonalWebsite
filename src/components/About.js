import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import emoji from "react-easy-emoji";
import Fade from "react-reveal/Fade";
import profilePic from "../assets/images/AboutPic.png";
import Socials from "./Socials";
import { makeStyles } from "@material-ui/core/styles";

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
      <Grid container direction="row" alignItems="center" justify="flex-start">
        <Grid item xs={1} />
        <Grid item xs={10} md={6} align="center">
          {/* https://www.react-reveal.com/docs/props/ */}
          <Fade left delay={500}>
            <Typography variant="h2" align="left">
              Hi! I'm Diego <span className="wave-emoji">{emoji("👋🏼")}</span>
            </Typography>
            <Typography variant="h4" align="left">
              I’m a software engineer with a passion for finding ways to
              integrate technology into society and a firm believer in its
              ability to enhance human experiences.
              <Socials noLeft />
            </Typography>
          </Fade>
        </Grid>
        {/* Hide avatar on small screens */}
        <Hidden smDown>
          <Grid item md={4} align="center">
            <Fade right>
              <Avatar
                className={classes.large + " about-avatar"}
                src={profilePic}
                alt="Diego Martinez"
              />
            </Fade>
          </Grid>
        </Hidden>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}
