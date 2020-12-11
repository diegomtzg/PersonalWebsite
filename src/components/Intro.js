import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Particles from 'react-tsparticles';
import particleParams from '../assets/particles.js';

function Intro() {
  return (
    <Particles params={particleParams} className="particles" />
  );
}

export default Intro;
