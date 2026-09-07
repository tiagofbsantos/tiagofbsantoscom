import "./about-me.css";
import Picture from "../picture/picture";
import profileAvif from "../../assets/profile_pic.avif";
import profileWebp from "../../assets/profile_pic.webp";
import profileJpg from "../../assets/profile_pic.jpg";

export default function AboutMe() {
  return (
    <header className="aboutMe">
      <div className="profilePicWrap">
        <Picture
          className="profilePic"
          alt="Tiago Santos"
          src={profileJpg}
          avif={profileAvif}
          webp={profileWebp}
          width={947}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <h1>Hi, I'm Tiago!</h1>
      <p>
        Lead Software Engineer with a Bsc. in Computer Science and
        Business Management
      </p>
      <p>I build full-stack web applications in Typescript, Node.js and React</p>
    </header>
  );
}
