import SmartVision from "../assets/smart_vision.jpg";
import KittenGenerator from "../assets/kittengenerator.jpg";
import TiagoSantosCom from "../assets/tiagofbsantos.png";
import BackgroundGenerator from "../assets/backgroundgenerator.png";
import Startup from "../assets/startup.jpg";
import DancingDroid from "../assets/dancing_droid.gif";
import Wildlife from "../assets/wildlife.jpg";

export type ProjectItem = {
  image: string;
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
    image: SmartVision,
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
    image: KittenGenerator,
    name: "Kitten Generator",
    description:
      "An interactive Progressive Web App with React and Redux for generating kittens",
    source: "https://github.com/tiagofbsantos/kitten-generator",
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
    moreInfo: "/projects/tiagofbsantoscom",
    id: "tiagofbsantoscom",
  },
];

export const miniProjectsList: ProjectItem[] = [
  {
    image: BackgroundGenerator,
    name: "Background Generator",
    description: "A handy CSS code background generator",
    source: "https://github.com/tiagofbsantos/background-generator",
    live: "https://backgroundgenerator.tiagofbsantos.com/",
  },
  {
    image: Startup,
    name: "Startup Landing Page",
    description: "A simple startup landing page with Mailchimp integration",
    source: "https://github.com/tiagofbsantos/startup-landing-page",
    live: "https://startup.tiagofbsantos.com/",
  },
  {
    image: DancingDroid,
    name: "Dancing Droid",
    description: "A simple CSS dancing droid",
    source: "https://github.com/tiagofbsantos/dancing-droid",
    live: "https://dancingdroid.tiagofbsantos.com/",
  },
  {
    image: Wildlife,
    name: "Wildlife",
    description: "A simple CSS Flexbox image gallery",
    source: "https://github.com/tiagofbsantos/wildlife",
    live: "https://wildlife.tiagofbsantos.com/",
  },
];
