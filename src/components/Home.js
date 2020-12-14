import React from "react";
import Typed from "react-typed";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  return (
    <div className="section home">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography variant="h2">Diego Martinez</Typography>
          <Typography variant="h3">
            <Typed
              strings={[
                "Software Engineer",
                "Masters in ECE at Carnegie Mellon",
                "Technology Optimist",
                "Full Stack Developer",
              ]}
              typeSpeed={70}
              backDelay={1500}
              backSpeed={40}
              loop
            />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
