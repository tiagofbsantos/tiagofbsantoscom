import React, { Fragment } from "react";
import Navigation from "../components/navigation/navigation";

import { ReactComponent as PwaLogo } from "../assets/pwa.svg";
import { ReactComponent as ReactLogo } from "../assets/react.svg";
import { ReactComponent as Route53Logo } from "../assets/route53.svg";
import { ReactComponent as JsLogo } from "../assets/javascript.svg";
import { ReactComponent as CssLogo } from "../assets/css.svg";
import { ReactComponent as HtmlLogo } from "../assets/html5.svg";
import { ReactComponent as GitLogo } from "../assets/git.svg";
import { ReactComponent as GithubLogo } from "../assets/github.svg";
import { ReactComponent as NpmLogo } from "../assets/npm.svg";
import { ReactComponent as JestLogo } from "../assets/jest.svg";
import { ReactComponent as ReduxLogo } from "../assets/redux.svg";
import { ReactComponent as CircleciLogo } from "../assets/circleci.svg";
import AmplifyLogo from "../assets/amplify.png";
import PWAScore from "../assets/pwakittengenerator.png";

import "./project-page.css";
import "../components/project/project.css";

const KittenGeneratorPage = () => {
  return (
    <Fragment>
      <Navigation page="projectPage" />
      <div className="projectPageBackground">
        <main className="projectPage">
          <article className="text">
            <h1 className="projectTitle">Kitten Generator</h1>
            <p>
              An interactive <strong>React</strong>{" "}
              <strong>Single Page Progressive Web App</strong> for generating
              kittens.
            </p>
            <p>
              Using{" "}
              <a
                className="textLink"
                href="https://jsonplaceholder.typicode.com/"
              >
                <strong>JSONPlaceholder API</strong>
              </a>{" "}
              for generating kittens' personal data and{" "}
              <a className="textLink" href="https://robohash.org/">
                <strong>Robohash API</strong>
              </a>{" "}
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
              And the flux pattern: Action -> Reducer -> Store -> Make changes.
            </p>
            <p>
              <strong>CI/CD</strong> done with <strong>circleci</strong>, with{" "}
              <strong>Jest</strong> and{" "}
              <a className="textLink" href="https://enzymejs.github.io/enzyme/">
                <strong>Enzyme</strong>
              </a>{" "}
              for performing unit tests.
            </p>
            <p>
              Deployed the app using <strong>AWS Amplify</strong> and{" "}
              <strong>Amazon Route 53</strong> for subdomain management.
            </p>
            <nav className="projectLinks">
              <a
                href="https://kittengenerator.tiagofbsantos.com/"
                className="projectLink"
              >
                See Live
              </a>
              <a
                href="https://github.com/tiagofbsantos/kitten-generator"
                className="projectLink"
              >
                App Code
              </a>
            </nav>
          </article>
          <div className="technologies">
            <h2>Technologies used:</h2>
            <div className="logos">
              <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">
                <PwaLogo />
              </a>
              <a href="https://reactjs.org/">
                <ReactLogo />
              </a>
              <a href="https://redux.js.org/">
                <ReduxLogo />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <JsLogo />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <CssLogo />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <HtmlLogo />
              </a>
              <a href="https://jestjs.io/">
                <JestLogo />
              </a>
              <a href="https://circleci.com/">
                <CircleciLogo />
              </a>
              <a href="https://aws.amazon.com/amplify/">
                <img src={AmplifyLogo} alt="AWS Amplify Logo" />
              </a>
              <a href="https://aws.amazon.com/route53/">
                <Route53Logo />
              </a>
              <a href="https://git-scm.com/">
                <GitLogo />
              </a>
              <a href="https://github.com/">
                <GithubLogo />
              </a>
              <a href="https://www.npmjs.com/">
                <NpmLogo />
              </a>
            </div>
            <p>Progressive Web App Lighthouse Score: </p>
            <a
              className="pwaImg"
              href="https://developers.google.com/web/tools/lighthouse/v3/scoring"
            >
              <img src={PWAScore} alt="Progressive Web App Lighthouse Score" />
            </a>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default KittenGeneratorPage;
