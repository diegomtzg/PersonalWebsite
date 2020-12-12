import React from "react";
import Particles from "react-tsparticles";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import './App.css'

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
