import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <div className="section footer">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h2" variant="h2">
            Footer
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
