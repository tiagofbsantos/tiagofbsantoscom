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
      "Face detection and celebrity recognition from a photo URL. React frontend, Node.js and Express REST API, PostgreSQL for accounts and Redis for sessions, deployed on AWS with single-instance HTTPS.",
    source: "https://github.com/tiagofbsantos/smart-vision",
    apiSource: "https://github.com/tiagofbsantos/smart-vision-api",
    moreInfo: "/projects/smartvision",
    id: "smartvision",
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
      "This site. A prerendered React and TypeScript progressive web app on Vite, deployed to AWS Amplify.",
    source: "https://github.com/tiagofbsantos/tiagofbsantoscom",
    moreInfo: "/projects/tiagofbsantoscom",
    id: "tiagofbsantoscom",
  },
];

export const miniProjectsList: ProjectItem[] = [
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
      "A React and Redux progressive web app that generates kittens from two public APIs. CI with CircleCI and Jest.",
    source: "https://github.com/tiagofbsantos/kitten-generator",
    live: "https://kittengenerator.tiagofbsantos.com/",
    moreInfo: "/projects/kittengenerator",
    id: "kittengenerator",
  },
  {
    image: {
      src: backgroundPng,
      avif: backgroundAvif,
      webp: backgroundWebp,
      width: 800,
      height: 450,
    },
    name: "Background Generator",
    description: "A CSS gradient background generator that outputs the code.",
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
    description: "A responsive startup landing page with Mailchimp signup.",
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
    description: "A droid animated entirely in CSS.",
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
    description: "A responsive image gallery built with CSS Flexbox.",
    source: "https://github.com/tiagofbsantos/wildlife",
    live: "https://wildlife.tiagofbsantos.com/",
  },
];
