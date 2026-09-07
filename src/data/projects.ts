import smartVisionAvif from "../assets/smart_vision.avif";
import smartVisionWebp from "../assets/smart_vision.webp";
import smartVisionJpg from "../assets/smart_vision.jpg";
import kittenAvif from "../assets/kittengenerator.avif";
import kittenWebp from "../assets/kittengenerator.webp";
import kittenJpg from "../assets/kittengenerator.jpg";
import portfolioAvif from "../assets/tiagofbsantos.avif";
import portfolioWebp from "../assets/tiagofbsantos.webp";
import portfolioJpg from "../assets/tiagofbsantos.jpg";
import backgroundAvif from "../assets/backgroundgenerator.avif";
import backgroundWebp from "../assets/backgroundgenerator.webp";
import backgroundPng from "../assets/backgroundgenerator.png";
import startupAvif from "../assets/startup.avif";
import startupWebp from "../assets/startup.webp";
import startupJpg from "../assets/startup.jpg";
import wildlifeAvif from "../assets/wildlife.avif";
import wildlifeWebp from "../assets/wildlife.webp";
import wildlifeJpg from "../assets/wildlife.jpg";
import DancingDroid from "../assets/dancing_droid.gif";

export type ResponsiveImage = {
  src: string;
  width: number;
  height: number;
  avif?: string;
  webp?: string;
};

export type ProjectItem = {
  image: ResponsiveImage;
  name: string;
  description: string;
  source: string;
  apiSource?: string;
  live?: string;
  moreInfo?: string;
  id?: string;
};

export const projectsList: ProjectItem[] = [
  {
    image: {
      src: smartVisionJpg,
      avif: smartVisionAvif,
      webp: smartVisionWebp,
      width: 800,
      height: 455,
    },
    name: "Smart Vision",
    description:
      "A React Progressive Web App for detecting faces and recognizing celebrities in pictures, with a PostgreSQL and Redis databases",
    source: "https://github.com/tiagofbsantos/smart-vision",
    apiSource: "https://github.com/tiagofbsantos/smart-vision-api",
    live: "https://smartvision.tiagofbsantos.com/",
    moreInfo: "/projects/smartvision",
    id: "smartvision",
  },
  {
    image: {
      src: kittenJpg,
      avif: kittenAvif,
      webp: kittenWebp,
      width: 800,
      height: 461,
    },
    name: "Kitten Generator",
    description:
      "An interactive Progressive Web App with React and Redux for generating kittens",
    source: "https://github.com/tiagofbsantos/kitten-generator",
    live: "https://kittengenerator.tiagofbsantos.com/",
    moreInfo: "/projects/kittengenerator",
    id: "kittengenerator",
  },
  {
    image: {
      src: portfolioJpg,
      avif: portfolioAvif,
      webp: portfolioWebp,
      width: 800,
      height: 463,
    },
    name: "Tiago F. B. Santos .com",
    description:
      "A React Progressive Web App portfolio, to showcase my work as a Lead Software Engineer",
    source: "https://github.com/tiagofbsantos/tiagofbsantoscom",
    moreInfo: "/projects/tiagofbsantoscom",
    id: "tiagofbsantoscom",
  },
];

export const miniProjectsList: ProjectItem[] = [
  {
    image: {
      src: backgroundPng,
      avif: backgroundAvif,
      webp: backgroundWebp,
      width: 800,
      height: 450,
    },
    name: "Background Generator",
    description: "A handy CSS code background generator",
    source: "https://github.com/tiagofbsantos/background-generator",
    live: "https://backgroundgenerator.tiagofbsantos.com/",
  },
  {
    image: {
      src: startupJpg,
      avif: startupAvif,
      webp: startupWebp,
      width: 800,
      height: 450,
    },
    name: "Startup Landing Page",
    description: "A simple startup landing page with Mailchimp integration",
    source: "https://github.com/tiagofbsantos/startup-landing-page",
    live: "https://startup.tiagofbsantos.com/",
  },
  {
    image: {
      src: DancingDroid,
      width: 800,
      height: 453,
    },
    name: "Dancing Droid",
    description: "A simple CSS dancing droid",
    source: "https://github.com/tiagofbsantos/dancing-droid",
    live: "https://dancingdroid.tiagofbsantos.com/",
  },
  {
    image: {
      src: wildlifeJpg,
      avif: wildlifeAvif,
      webp: wildlifeWebp,
      width: 800,
      height: 450,
    },
    name: "Wildlife",
    description: "A simple CSS Flexbox image gallery",
    source: "https://github.com/tiagofbsantos/wildlife",
    live: "https://wildlife.tiagofbsantos.com/",
  },
];
