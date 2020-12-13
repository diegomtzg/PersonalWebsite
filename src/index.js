import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactFullpage from "@fullpage/react-fullpage";
import Particles from "react-tsparticles";
import particleParams from "./assets/particles.js";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import $ from "jquery";
import theme from "./theme";
import reportWebVitals from "./reportWebVitals";

function onLeave(origin, destination, direction) {
  var oldNav = $("#" + origin.anchor + "-nav");
  var newNav = $("#" + destination.anchor + "-nav");
  oldNav.removeClass("active");
  newNav.addClass("active");
}

// Option documentation at https://github.com/alvarotrigo/fullPage.js#options
const Fullpage = () => (
  <ReactFullpage
    navigation
    anchors={["home", "about", "work", "projects", "skills", "contact"]}
    recordHistory={false}
    onLeave={onLeave}
    fitToSection
    fixedElements={[".particles", "#header", "#top-button"]}
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
