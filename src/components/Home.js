import React from "react";
import Typed from "react-typed";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import emoji from "react-easy-emoji";
import Fade from "react-reveal/Fade";
import avatar from "../assets/images/memoji.png";

export default function Home() {
  return (
    <div className="section home">
      <Grid container direction="row" alignItems="center" justify="flex-start">
        <Grid item xs={1} />
        <Grid item xs={10} md={6} align="center">
          {/* https://www.react-reveal.com/docs/props/ */}
          <Fade>
            <Typography variant="h2" align="center">
              Hi! I'm Diego <span className="wave-emoji">{emoji("👋🏼")}</span>
            </Typography>
            <Typography variant="h4" align="center">
              I’m a{" "}
              <Typed
                className="intro-titles"
                strings={[
                  "Software Engineer",
                  "Technology Optimist",
                  "Full Stack Developer",
                ]}
                typeSpeed={70}
                backDelay={1100}
                backSpeed={40}
                loop
              />
              <br />
              with a passion for finding ways to integrate technology into
              society and a firm believer in its ability to enhance human
              experiences.
            </Typography>
          </Fade>
        </Grid>
        {/* Hide avatar on small screens */}
        <Hidden smDown>
          <Grid item md={4} align="center">
            <Fade>
              <img className="avatar" src={avatar} alt="Diego Martinez"></img>
            </Fade>
          </Grid>
        </Hidden>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}
