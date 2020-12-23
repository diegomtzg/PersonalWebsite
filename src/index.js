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
import reportWebVitals from "./reportWebVitals";

function onLeave(origin, destination, direction) {
  console.log(origin.anchor, destination.anchor);
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
    recordHistory={false}
    onLeave={onLeave}
    fitToSection
    touchSensitivity={15}
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
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Fullpage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
