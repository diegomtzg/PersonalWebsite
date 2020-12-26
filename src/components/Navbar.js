import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import DM from "../assets/images/DM.png";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand fixed-top"
      id="header"
    >
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Hidden smDown>
            <Grid item xs={1} />
            <a className="navbar-brand js-scroll" href="#home">
              <img className="dm-logo" src={DM} alt="DM Logo" />
            </a>
          </Hidden>
        </Grid>

        <Grid item>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                id="home-nav"
                className="nav-link js-scroll active"
                href="#home"
              >
                <Typography variant="h6">Home</Typography>
              </a>
            </li>
            <li className="nav-item">
              <a id="about-nav" className="nav-link js-scroll" href="#about">
                <Typography variant="h6">About</Typography>
              </a>
            </li>
            <li className="nav-item">
              <a
                id="education-nav"
                className="nav-link js-scroll"
                href="#education"
              >
                <Typography variant="h6">Education</Typography>
              </a>
            </li>
            <li className="nav-item">
              <a id="work-nav" className="nav-link js-scroll" href="#work">
                <Typography variant="h6">Work</Typography>
              </a>
            </li>
            <li className="nav-item">
              <a
                id="projects-nav"
                className="nav-link js-scroll"
                href="#projects"
              >
                <Typography variant="h6">Projects</Typography>
              </a>
            </li>
            <li className="nav-item">
              <a id="skills-nav" className="nav-link js-scroll" href="#skills">
                <Typography variant="h6">Skills</Typography>
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </nav>
  );
}
