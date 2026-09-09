import "./about-me.css";
import Picture from "../picture/picture";
import { HERO } from "../../data/content";
import profileAvif from "../../assets/profile_pic.avif";
import profileWebp from "../../assets/profile_pic.webp";
import profileJpg from "../../assets/profile_pic.jpg";

export default function AboutMe() {
  return (
    <header className="aboutMe">
      <div className="heroCopy">
        <h1>{HERO.name}</h1>
        <p className="heroRole">{HERO.role}</p>
        <p className="heroDomain">{HERO.domain}</p>
        <p className="heroPitch">{HERO.pitch}</p>
        <p className="heroMeta">{HERO.meta}</p>
      </div>
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
    </header>
  );
}
