import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="section projects">
      <Grid container alignItems="space-evenly" spacing={3}>
        <Grid container item justify="space-evenly">
          <Grid item>
            <ProjectCard />
          </Grid>
          <Grid item>
            <ProjectCard />
          </Grid>
          <Grid item>
            <ProjectCard />
          </Grid>
        </Grid>
        <Grid container item justify="space-evenly">
          <Grid item>
            <ProjectCard />
          </Grid>
          <Grid item>
            <ProjectCard />
          </Grid>
          <Grid item>
            <ProjectCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
