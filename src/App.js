import { React, useEffect } from "react";
import ReactGA from "react-ga";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Border from "./components/Border";
import Footer from "./components/Footer";

export default function App(props) {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_KEY);
    ReactGA.pageview("/");

    console.info(
      `                                        
  ██████╗ ███╗   ███╗
  ██╔══██╗████╗ ████║
  ██║  ██║██╔████╔██║
  ██║  ██║██║╚██╔╝██║
  ██████╔╝██║ ╚═╝ ██║
  ╚═════╝ ╚═╝     ╚═╝
    ` +
        "\nSneaky sneakyyyyyy :) Check out the source code at https://github.com/diegomtzg/ReactPortfolio\n\n"
    );
  }, []);

  return (
    <div className="main">
      <Navbar />
      <Home />
      <Border />
      <About />
      <Border />
      <Education />
      <Border />
      <Work />
      <Border />
      <Projects />
      <Border />
      <Skills />
      <Footer />
    </div>
  );
}
