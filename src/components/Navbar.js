import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="header"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#home">
          <h3>Diego Martinez</h3>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                id="home-nav"
                className="nav-link js-scroll active"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a id="about-nav" className="nav-link js-scroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a id="work-nav" className="nav-link js-scroll" href="#work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                id="projects-nav"
                className="nav-link js-scroll"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a id="skills-nav" className="nav-link js-scroll" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                id="contact-nav"
                className="nav-link js-scroll"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
