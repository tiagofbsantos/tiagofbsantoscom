import React, { Fragment } from "react";

import Navigation from "../components/navigation/navigation";
import AboutMe from "../components/about-me/about-me";
import Projects from "../components/projects/projects";

import SmartVision from "../assets/smart_vision.jpg";
import KittenGenerator from "../assets/kittengenerator.jpg";
import TiagoSantosCom from "../assets/tiagofbsantos.png";
import BackgroundGenerator from "../assets/backgroundgenerator.png";
import Startup from "../assets/startup.jpg";
import DancingDroid from "../assets/dancing_droid.gif";
import Wildlife from "../assets/wildlife.jpg";

const projectsList = [
  {
    image: SmartVision,
    name: "Smart Vision",
    description:
      "A React Progressive Web App for detecting faces in pictures, with a PostgreSQL and Redis databases",
    source: "https://github.com/tiagofbsantos/smart-vision",
    apiSource: "https://github.com/tiagofbsantos/smart-vision-api",
    live: "https://smartvision.tiagofbsantos.com/",
    moreInfo: "/projects/smartvision",
    id: "smartvision",
  },
  {
    image: KittenGenerator,
    name: "Kitten Generator",
    description:
      "An interactive Progressive Web App with React and Redux for generating kittens",
    source: "https://github.com/tiagofbsantos/kitten-generator",
    apiSource: "",
    live: "https://kittengenerator.tiagofbsantos.com/",
    moreInfo: "/projects/kittengenerator",
    id: "kittengenerator",
  },
  {
    image: TiagoSantosCom,
    name: "Tiago F. B. Santos .com",
    description:
      "A React Progressive Web App portfolio, to showcase my work as a Full Stack Software Engineer",
    source: "https://github.com/tiagofbsantos/tiagofbsantoscom",
    apiSource: "",
    live: "",
    moreInfo: "/projects/tiagofbsantoscom",
    id: "tiagofbsantoscom",
  },
];

const miniProjectsList = [
  {
    image: BackgroundGenerator,
    name: "Background Generator",
    description: "A handy CSS code background generator",
    source: "https://github.com/tiagofbsantos/background-generator",
    apiSource: "",
    live: "https://backgroundgenerator.tiagofbsantos.com/",
    moreInfo: "",
  },
  {
    image: Startup,
    name: "Startup Landing Page",
    description: "A simple startup landing page with Mailchimp integration",
    source: "https://github.com/tiagofbsantos/startup-landing-page",
    apiSource: "",
    live: "https://startup.tiagofbsantos.com/",
    moreInfo: "",
  },
  {
    image: DancingDroid,
    name: "Dancing Droid",
    description: "A simple CSS dancing droid",
    source: "https://github.com/tiagofbsantos/dancing-droid",
    apiSource: "",
    live: "https://dancingdroid.tiagofbsantos.com/",
    moreInfo: "",
  },
  {
    image: Wildlife,
    name: "Wildlife",
    description: "A simple CSS Flexbox image gallery",
    source: "https://github.com/tiagofbsantos/wildlife",
    apiSource: "",
    live: "https://wildlife.tiagofbsantos.com/",
    moreInfo: "",
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <Navigation page="homepage" />
      <AboutMe />
      <Projects
        item="project"
        section="projects"
        sectionTitle="Projects"
        projectsList={projectsList}
      />
      <Projects
        item="miniProject"
        section="miniProjects"
        sectionTitle="Mini Projects"
        projectsList={miniProjectsList}
      />
    </Fragment>
  );
};

export default HomePage;
