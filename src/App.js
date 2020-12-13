import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App(props) {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
