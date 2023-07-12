import React from "react";
import "./about-me.css";
import ProfilePic from "../../assets/profile_pic.jpg";

const AboutMe = () => {
  return (
    <header className="aboutMe">
      <img className="profilePic" alt="Tiago Santos" src={ProfilePic} />
      <h1>Hi, I'm Tiago!</h1>
      <p>
        A Full Stack Software Engineer with a Bachelor's in Computer Science and
        Business Management
      </p>
      <p>I build web applications in Typescript, Node.js and React</p>
    </header>
  );
};

export default AboutMe;
