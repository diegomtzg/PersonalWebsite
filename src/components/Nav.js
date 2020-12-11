import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h3>Logo</h3>
      <ul>
        <Link to="/work">
          <li>Work</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
