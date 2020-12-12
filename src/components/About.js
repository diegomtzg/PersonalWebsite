import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function About() {
  return (
    <div className="section about">
        <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h2" variant="h2">
            About
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
