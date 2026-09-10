import "./about-me.css";
import Picture from "../picture/picture";
import { HERO } from "../../data/content";
import profileAvif from "../../assets/profile_pic.avif";
import profileAvif320 from "../../assets/profile_pic_320.avif";
import profileWebp from "../../assets/profile_pic.webp";
import profileWebp320 from "../../assets/profile_pic_320.webp";
import profileJpg from "../../assets/profile_pic.jpg";
import profileJpg320 from "../../assets/profile_pic_320.jpg";

const PROFILE_SIZES = "320px";
const PROFILE_WIDTH = 640;
const PROFILE_HEIGHT = 649;

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
          srcSet={`${profileJpg320} 320w, ${profileJpg} 640w`}
          avif={profileAvif}
          avifSrcSet={`${profileAvif320} 320w, ${profileAvif} 640w`}
          webp={profileWebp}
          webpSrcSet={`${profileWebp320} 320w, ${profileWebp} 640w`}
          sizes={PROFILE_SIZES}
          width={PROFILE_WIDTH}
          height={PROFILE_HEIGHT}
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </header>
  );
}
