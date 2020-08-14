import React from "react";
import Navbar from "../Navbar";
import AboutMe from "../Sections/aboutMe/aboutMe";
import Resume from "../Sections/resume";
import Projects from "../Sections/projects";
import ContactMe from "../Sections/contactMe";
import "./main.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Resume />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Main;
