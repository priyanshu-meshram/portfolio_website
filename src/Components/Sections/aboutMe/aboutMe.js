import React from "react";
import "./aboutMe.css";
import { Grid, Cell } from "react-mdl";
import logo from "../../../img.jpg";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="mainHeader">
        <h3>
          <span className="underlline">ABOUT ME</span>
        </h3>
      </div>
      <div className="me">Thats Me</div>
      <span className="spaan">&#10552;</span>

      <div style={{ width: "100%", margin: "auto" }}>
        <Grid>
          <Cell col={6}>
            <img src={logo} />
          </Cell>
          <Cell col={6}>
            <div className="content">
              <div>
                Hey there I'm Priyanshu. Pretty sure you saw that before but
                thought it was worth repeating if you missed it
              </div>
              <div style={{ marginTop: "20px" }}>
                Currently a first year Computer Engineering student at the
                University of Waterloo
              </div>
              <div className="coop">
                I'm interested in full stack web development, data science and
                game development
              </div>
              <div className="coop">
                Looking for Co-op oppurtuninties in Winter 2021!
              </div>
            </div>
          </Cell>
        </Grid>
        <div className="moreAboutMe">
          <div>
            I have a wide range of interests and hobbies. Some of the sports i
            play are table tennis, billiards and football. I even played table
            tennis at a national level. I also love coding and building things
            from scratch. I'm also into meditation cuz it helps me learn more
            about myself and helps me concentrate.
          </div>
          <div className="skills">
            Here are some of the skills that i have acquired as of yet:
          </div>
          <Grid>
            <Cell col={6}>
              <div style={{ textDecoration: "underline", textAlign: "center" }}>
                Programming Languages
              </div>
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                C, C++, Python, Javascript, Html5, Css
              </div>
            </Cell>
            <Cell col={6}>
              <div style={{ textDecoration: "underline", textAlign: "center" }}>
                Frameworks and Libraries
              </div>
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                React, Redux, NodeJs, ExpressJs, Jquery, Bootstrap, MongoDb,
                MySql Numpy, Pandas, Keras, Tensorflow
              </div>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={6}>
              <div style={{ textDecoration: "underline", textAlign: "center" }}>
                Interpersonal Skills
              </div>
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                Leadership, Team Work, Good communication skills
              </div>
            </Cell>
            <Cell col={6}>
              <div style={{ textDecoration: "underline", textAlign: "center" }}>
                Tools and Technologies
              </div>
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                Postman, Git
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
