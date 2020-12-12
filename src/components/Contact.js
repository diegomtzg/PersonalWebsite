import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Contact() {
  return (
    <div className="section contact">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h2" variant="h2">
            Contact
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
