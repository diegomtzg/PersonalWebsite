import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  faCamera,
  faFileAlt,
  faShapes,
  faTabletAlt,
  faDiceD20,
  faLaptopCode,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import "../static/css/Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="section projects">
      <Grid container alignItems="space-evenly" spacing={3}>
        <Grid container item justify="space-evenly">
          <Grid item>
            <ProjectCard
              projectInfo={{
                icon: faCamera,
                name: "InFrame",
                desc: "Description",
              }}
            />
          </Grid>
          <Grid item>
            <ProjectCard
              projectInfo={{
                icon: faFileAlt,
                name: "Vitae",
                desc: "Description",
              }}
            />
          </Grid>
          <Grid item>
            <ProjectCard
              projectInfo={{
                icon: faDiceD20,
                name: "Scotty3D",
                desc: "Description",
              }}
            />
          </Grid>
        </Grid>
        <Grid container item justify="space-evenly">
          <Grid item>
            <ProjectCard
              projectInfo={{
                icon: faTabletAlt,
                name: "MirrorX",
                desc: "Description",
              }}
            />
          </Grid>
          <Grid item>
            <ProjectCard
              projectInfo={{
                icon: faLaptopCode,
                name: "ScreenBacklight",
                desc: "Description",
              }}
            />
          </Grid>
          <Grid item>
            <ProjectCard
              projectInfo={{
                icon: faHeartbeat,
                name: "CDC WonderPy",
                desc: "Description",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
