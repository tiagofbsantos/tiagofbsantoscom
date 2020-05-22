import React from "react";
import "./about-me.css";
import ProfilePic from "../../assets/profile_pic.png";

const AboutMe = () => {
  return (
    <header className="aboutMe">
      <img className="profilePic" alt="Tiago Santos" src={ProfilePic} />
      <h1>Hi, I'm Tiago!</h1>
      <p>
        A Full-Stack Web Developer with a Bachelor's in Computer Science and
        Business Management.
      </p>
      <p>Currently looking for full time employment!</p>
      <p>Contact me at santosfbtiago@gmail.com</p>
    </header>
  );
};

export default AboutMe;
