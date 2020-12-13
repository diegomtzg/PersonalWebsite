import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Projects() {
  return (
    <div className="section projects">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h2" variant="h2">
            Projects
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
