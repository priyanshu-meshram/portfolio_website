import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1000}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contactMe"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
