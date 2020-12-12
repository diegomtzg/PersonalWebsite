import React from "react";
import Typed from "react-typed";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <div className="section home">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h2" variant="h2">
            Diego Martinez
          </Typography>
          <Typography component="h4" variant="h4">
            <Typed
              strings={[
                "Software Engineer",
                "Masters in ECE at Carnegie Mellon",
                "Technology Optimist",
                "Full Stack Developer",
              ]}
              typeSpeed={80}
              backDelay={1100}
              backSpeed={30}
              loop
            />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
