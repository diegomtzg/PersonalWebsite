import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Work() {
  return (
    <div className="section work">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h2" variant="h2">
            Work
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Work;
