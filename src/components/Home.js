import React from "react";
import Typed from "react-typed";
import Grid from "@material-ui/core/Grid";

export default function Home() {
  return (
    <div className="section home">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center" className="home-content">
          <h2 className="main-title">Diego Martinez</h2>
          <h3 className="main-subtitle">
            <Typed
              strings={[
                "Software Engineer",
                "Technology Optimist",
                "Masters in ECE at Carnegie Mellon",
              ]}
              typeSpeed={70}
              backDelay={1000}
              backSpeed={50}
              loop
            />
          </h3>
        </Grid>
      </Grid>
    </div>
  );
}
