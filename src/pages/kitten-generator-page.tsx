import Navigation from "../components/navigation/navigation";
import ExternalLink from "../components/external-link/external-link";

import PwaLogo from "../assets/pwa.svg?react";
import ReactLogo from "../assets/react.svg?react";
import Route53Logo from "../assets/route53.svg?react";
import JsLogo from "../assets/javascript.svg?react";
import CssLogo from "../assets/css.svg?react";
import HtmlLogo from "../assets/html5.svg?react";
import GitLogo from "../assets/git.svg?react";
import GithubLogo from "../assets/github.svg?react";
import NpmLogo from "../assets/npm.svg?react";
import JestLogo from "../assets/jest.svg?react";
import ReduxLogo from "../assets/redux.svg?react";
import CircleciLogo from "../assets/circleci.svg?react";
import AmplifyLogo from "../assets/amplify.png";
import PWAScore from "../assets/pwakittengenerator.png";

import "./project-page.css";
import "../components/project/project.css";

export default function KittenGeneratorPage() {
  return (
    <>
      <Navigation page="projectPage" id="kittengenerator" />
      <div className="projectPageBackground">
        <main className="projectPage">
          <article className="text">
            <h1 className="projectTitle">Kitten Generator</h1>
            <p>
              An interactive <strong>React</strong>{" "}
              <strong>Single Page Responsive Progressive Web App</strong> for
              generating kittens.
            </p>
            <p>
              Using{" "}
              <ExternalLink
                className="textLink"
                href="https://jsonplaceholder.typicode.com/"
              >
                <strong>JSONPlaceholder API</strong>
              </ExternalLink>{" "}
              for generating kittens' personal data and{" "}
              <ExternalLink className="textLink" href="https://robohash.org/">
                <strong>Robohash API</strong>
              </ExternalLink>{" "}
              for generating their unique pictures and backgrounds from their
              names.
            </p>
            <p>
              Using <strong>Redux</strong> for better and scalable state
              management. Using the 3 principles:
            </p>
            <ul>
              <li>single source of truth</li>
              <li>state is read only</li>
              <li>changes are made using pure functions</li>
            </ul>
            <p>
              And the flux pattern: Action → Reducer → Store → Make changes.
            </p>
            <p>
              <strong>CI/CD</strong> done with <strong>circleci</strong>, with{" "}
              <strong>Jest</strong> and{" "}
              <ExternalLink
                className="textLink"
                href="https://enzymejs.github.io/enzyme/"
              >
                <strong>Enzyme</strong>
              </ExternalLink>{" "}
              for performing unit tests.
            </p>
            <p>
              Deployed the app using <strong>AWS Amplify</strong> and{" "}
              <strong>Amazon Route 53</strong> for subdomain management.
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
              <ExternalLink
                href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                aria-label="Progressive Web Apps"
              >
                <PwaLogo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href="https://reactjs.org/" aria-label="React">
                <ReactLogo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href="https://redux.js.org/" aria-label="Redux">
                <ReduxLogo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                aria-label="JavaScript"
              >
                <JsLogo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                aria-label="CSS"
              >
                <CssLogo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                aria-label="HTML"
              >
                <HtmlLogo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href="https://jestjs.io/" aria-label="Jest">
                <JestLogo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href="https://circleci.com/" aria-label="CircleCI">
                <CircleciLogo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink
                href="https://aws.amazon.com/amplify/"
                aria-label="AWS Amplify"
              >
                <img src={AmplifyLogo} alt="" />
              </ExternalLink>
              <ExternalLink
                href="https://aws.amazon.com/route53/"
                aria-label="Amazon Route 53"
              >
                <Route53Logo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href="https://git-scm.com/" aria-label="Git">
                <GitLogo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href="https://github.com/" aria-label="GitHub">
                <GithubLogo aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href="https://www.npmjs.com/" aria-label="npm">
                <NpmLogo aria-hidden="true" />
              </ExternalLink>
            </div>
            <p>Progressive Web App Lighthouse Score: </p>
            <ExternalLink
              className="pwaImg"
              href="https://developers.google.com/web/tools/lighthouse/v3/scoring"
              aria-label="Progressive Web App Lighthouse scoring"
            >
              <img src={PWAScore} alt="Progressive Web App Lighthouse Score" />
            </ExternalLink>
          </div>
        </main>
      </div>
    </>
  );
}
