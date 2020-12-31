import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactFullpage from "@fullpage/react-fullpage";
import Particles from "react-tsparticles";
import particleParams from "./static/const/particles.js";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./static/css/App.css";
import "./static/css/index.css";
import theme from "./static/const/theme";

function onLeave(origin, destination, direction) {
  // console.log(origin.anchor, destination.anchor);
  $("#" + origin.anchor + "-nav").removeClass("active");
  $("#" + destination.anchor + "-nav").addClass("active");
}

// Option documentation at https://github.com/alvarotrigo/fullPage.js#options
const Fullpage = () => (
  <ReactFullpage
    anchors={[
      "home",
      "about",
      "education",
      "work",
      "projects",
      "skills",
      "footer",
    ]}
    licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
    recordHistory={false}
    onLeave={onLeave}
    fitToSection
    scrollingSpeed={600}
    responsiveWidth={1050} // Use if you can't get mobile sections to fit onto screen
    touchSensitivity={25}
    fixedElements={[".particles", "#header"]}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Particles
            height="100vh"
            params={particleParams}
            className="particles"
          />
          <App />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Fullpage />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);
