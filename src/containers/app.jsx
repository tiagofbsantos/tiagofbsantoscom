import React, { Fragment } from "react";
import Navigation from "../components/navigation/navigation";
import AboutMe from "../components/about-me/about-me";
import Projects from "../components/projects/projects";
import MiniProjects from "../components/mini-projects/mini-projects";
import TrackVisibility from "../components/track-visibility/track-visibility";
import SmartVision from "../assets/SmartVision.png";
import BenderFriends from "../assets/BenderFriends.png";
import MeerkatApparel from "../assets/MeerkatApparel.png";
import BackgroundGenerator from "../assets/BackgroundGenerator.png";
import Startup from "../assets/Startup.png";
import DancingDroid from "../assets/DancingDroid.png";
import Wildlife from "../assets/Wildlife.png";

const projectsList = [
  {
    image: SmartVision,
    name: "Smart Vision",
    description:
      "A React Progressive Web App for finding photos in pictures, with a PostgreSQL and Redis databases",
    source: "https://github.com/tiagofbsantos/smart-vision",
    apiSource: "https://github.com/tiagofbsantos/smart-vision-api",
    live: "https://smartvision.tiagofbsantos.com/",
  },
  {
    image: BenderFriends,
    name: "Bender Friends",
    description:
      "An interactive Progressive Web App with React and Redux for finding bender friends",
    source: "https://github.com/tiagofbsantos/bender-friends",
    apiSource: "",
    live: "https://benderfriends.tiagofbsantos.com/",
  },
  {
    image: MeerkatApparel,
    name: "Meerkat Apparel (early work in progress)",
    description: "A React Progressive Web App Online Shop for Meerkat Apparel",
    source: "https://github.com/tiagofbsantos/meerkat-apparel",
    apiSource: "",
    live: "https://meerkatapparel.tiagofbsantos.com/",
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
  },
  {
    image: Startup,
    name: "Startup Landing Page",
    description: "A simple startup landing page with mailchimp integration",
    source: "https://github.com/tiagofbsantos/startup-landing-page",
    apiSource: "",
    live: "https://startup.tiagofbsantos.com/",
  },
  {
    image: DancingDroid,
    name: "Dancing Droid",
    description: "A simple CSS dancing droid",
    source: "https://github.com/tiagofbsantos/dancing-droid",
    apiSource: "",
    live: "https://dancingdroid.tiagofbsantos.com/",
  },
  {
    image: Wildlife,
    name: "Wildlife",
    description: "A simple CSS Flexbox image gallery",
    source: "https://github.com/tiagofbsantos/wildlife",
    apiSource: "",
    live: "https://wildlife.tiagofbsantos.com/",
  },
];

/*const projectsObserver = document.querySelector(".projects");

const options = {};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		console.log(entry); //entry.target	
	});
}, options);

observer.observe(projectsObserver);*/

function App() {
  return (
    <Fragment>
      <Navigation />
      <AboutMe />
      <TrackVisibility onVisible={() => console.log("I see you!")}>
        <Projects projectsList={projectsList} />
      </TrackVisibility>
      <MiniProjects miniProjectsList={miniProjectsList} />
    </Fragment>
  );
}

export default App;
