import React from "react";
import Typed from "react-typed";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  return (
    <div className="section home">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center" className="home-content">
          <Typography variant="h2">Diego Martinez</Typography>
          <Typography variant="h3">
            <Typed
              strings={[
                "Masters in ECE at Carnegie Mellon",
                "Software Engineer",
                "Technology Optimist",
              ]}
              typeSpeed={50}
              backDelay={1000}
              backSpeed={40}
              loop
            />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
