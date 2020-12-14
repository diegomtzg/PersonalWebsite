import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App(props) {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <Work />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
