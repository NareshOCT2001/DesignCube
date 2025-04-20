import React from "react";
import "./About.css";
import './Fade.css'

const About = (props) => {
  if (props.name === "MEET*THE*TEAM") {
    return (
      <section className="about" id="about">
        <h1 className="MEETTHETEAM">{props.name}</h1>
      </section>
    );
  }
  else if(props.name === "CUSTOMER*THOUGHTS"){
    return (
      <section className="about">
      <h1 id="CUSTOMERTHOUGHTS">{props.name}</h1>
    </section>
    );

  } 
  else if(props.name === "OUR*PROJECTS"){
    return (
      <section className="about" id="projects">
        <h1 id="OURPROJECTS">{props.name}</h1>
      </section>
    );
  }
  else {
    return (
      <section className="about" id="about">
        <h1 id="about-us">{props.name}</h1>
      </section>
    );
  }
};

export default About;
