import React from "react";
import TypeIt from "typeit-react";
import ParticlesBg from "particles-bg";
import { NavLink } from "react-router-dom";
import { BsChevronDoubleRight } from "react-icons/bs";
import { IconContext } from "react-icons";

import "./Landing.css";
const Landing = () => {
  return (
    <React.Fragment>
      <div className="main">
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type("Hey there! I'm Priyanshu")
              .pause(750)
              .delete()
              .pause(500)
              .type("Welcome to my website");
            return instance;
          }}
        />

        <div className="underline"></div>

        <ParticlesBg type="cobweb" color="#808080" bg={true} num={70} />
      </div>
      <NavLink to="/home">
        <IconContext.Provider
          value={{
            style: {
              verticalAlign: "middle",
              marginLeft: "48%",
              marginTop: "10px",
            },
          }}
        >
          <BsChevronDoubleRight size="3rem" />
        </IconContext.Provider>
      </NavLink>
    </React.Fragment>
  );
};

export default Landing;
