import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import emoji from "react-easy-emoji";
import avatar from "../assets/images/memoji.png";

export default function About() {
  return (
    <div className="section home">
      <Grid container direction="row" alignItems="center">
        <Grid item xs={1}></Grid>
        <Grid item xs={10} md={6} align="center" justify="flex-start">
          <Typography variant="h2" align="left">
            Hi! I'm Diego <span className="wave-emoji">{emoji("👋🏼")}</span>
          </Typography>
          <Typography variant="h4" align="left">
            I’m a software engineer with a passion for finding ways to integrate
            technology into society and a firm believer in its ability to
            enhance human experiences.
          </Typography>
        </Grid>
        {/* Hide avatar on small screens */}
        <Hidden smDown>
          <Grid item md={4} align="center" justify="center">
            <img className="avatar" src={avatar} alt="Diego Martinez"></img>
          </Grid>
        </Hidden>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
