import Navigation from "../components/navigation/navigation";
import ExternalLink from "../components/external-link/external-link";
import TechLogo from "../components/tech-logo/tech-logo";
import { PROJECT_INTROS } from "../data/content";

import pwaLogo from "../assets/pwa.svg?url";
import reactLogo from "../assets/react.svg?url";
import route53Logo from "../assets/route53.svg?url";
import jsLogo from "../assets/javascript.svg?url";
import cssLogo from "../assets/css.svg?url";
import htmlLogo from "../assets/html5.svg?url";
import gitLogo from "../assets/git.svg?url";
import githubLogo from "../assets/github.svg?url";
import npmLogo from "../assets/npm.svg?url";
import jestLogo from "../assets/jest.svg?url";
import reduxLogo from "../assets/redux.svg?url";
import circleciLogo from "../assets/circleci.svg?url";
import amplifyLogo from "../assets/amplify.png";
import pwaScore from "../assets/pwakittengenerator.png";

import "./project-page.css";
import "../components/project/project.css";

const intro = PROJECT_INTROS.find(
  (page) => page.path === "/projects/kittengenerator",
);

const logos = [
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
    src: pwaLogo,
    label: "Progressive Web Apps",
  },
  { href: "https://react.dev/", src: reactLogo, label: "React" },
  { href: "https://redux.js.org/", src: reduxLogo, label: "Redux" },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    src: jsLogo,
    label: "JavaScript",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    src: cssLogo,
    label: "CSS",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    src: htmlLogo,
    label: "HTML",
  },
  { href: "https://jestjs.io/", src: jestLogo, label: "Jest" },
  { href: "https://circleci.com/", src: circleciLogo, label: "CircleCI" },
  {
    href: "https://aws.amazon.com/amplify/",
    src: amplifyLogo,
    label: "AWS Amplify",
  },
  {
    href: "https://aws.amazon.com/route53/",
    src: route53Logo,
    label: "Amazon Route 53",
  },
  { href: "https://git-scm.com/", src: gitLogo, label: "Git" },
  { href: "https://github.com/", src: githubLogo, label: "GitHub" },
  { href: "https://www.npmjs.com/", src: npmLogo, label: "npm" },
];

export default function KittenGeneratorPage() {
  return (
    <>
      <Navigation page="projectPage" id="kittengenerator" />
      <div className="projectPageBackground">
        <main id="main" tabIndex={-1} className="projectPage">
          <article className="text">
            <h1 className="projectTitle">Kitten Generator</h1>
            <p>{intro?.intro}</p>
            <p>
              An interactive React progressive web app that generates kittens,
              using the{" "}
              <ExternalLink
                className="textLink"
                href="https://jsonplaceholder.typicode.com/"
              >
                JSONPlaceholder API
              </ExternalLink>{" "}
              for their details and the{" "}
              <ExternalLink className="textLink" href="https://robohash.org/">
                Robohash API
              </ExternalLink>{" "}
              to derive a unique picture and background from each name. State is
              managed with Redux. CI/CD runs on CircleCI with Jest unit tests,
              and the app is deployed on AWS Amplify with Amazon Route 53 for
              the subdomain.
            </p>
            <nav className="projectLinks" aria-label="Kitten Generator links">
              <ExternalLink
                href="https://kittengenerator.tiagofbsantos.com/"
                className="projectLink"
              >
                See Live
              </ExternalLink>
              <ExternalLink
                href="https://github.com/tiagofbsantos/kitten-generator"
                className="projectLink"
              >
                App Code
              </ExternalLink>
            </nav>
          </article>
          <div className="technologies">
            <h2>Technologies used:</h2>
            <div className="logos">
              {logos.map((logo) => (
                <TechLogo key={logo.label} {...logo} />
              ))}
            </div>
            <p>Progressive Web App Lighthouse Score: </p>
            <ExternalLink
              className="pwaImg"
              href="https://developer.chrome.com/docs/lighthouse/overview"
              aria-label="Lighthouse scoring"
            >
              <img
                src={pwaScore}
                alt="Progressive Web App Lighthouse Score"
                width={500}
                height={125}
                loading="lazy"
                decoding="async"
              />
            </ExternalLink>
          </div>
        </main>
      </div>
    </>
  );
}
