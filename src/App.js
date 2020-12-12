import React from "react";
import Particles from "react-tsparticles";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import particleParams from "./assets/particles.js";
import './App.css'

function App() {
  return (
    <div className="main">
      <Particles params={particleParams} className="particles" />
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
