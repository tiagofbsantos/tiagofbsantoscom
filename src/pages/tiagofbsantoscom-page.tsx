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
import ReactRouterLogo from "../assets/reactrouter.svg?react";
import AmplifyLogo from "../assets/amplify.png";
import PWAScore from "../assets/pwatiagofbsantoscom.png";

import "./project-page.css";
import "../components/project/project.css";

export default function TiagoFBSantosCom() {
  return (
    <>
      <Navigation page="projectPage" id="tiagofbsantoscom" />
      <div className="projectPageBackground">
        <main className="projectPage">
          <article className="text">
            <h1 className="projectTitle">Tiago F. B. Santos .com</h1>
            <p>
              The personal portfolio website created to showcase my work as a
              Lead Software Engineer.
            </p>
            <p>
              It's a <strong>Responsive Progressive Web App</strong>, using{" "}
              <strong>React</strong> to render the components and{" "}
              <strong>React Router</strong> to navigate through the website.
            </p>
            <p>
              Including several animations in <strong>CSS3</strong> and{" "}
              <strong>svg</strong>. Using <strong>semantic HTML5</strong>.
            </p>
            <p>
              The projects and mini projects sections of the website are built
              using reusable code, that builds both sections using the props it
              receives, an array of objects. Each object in the array contains
              all the necessary information to build each project component. The
              base section information is also passed as props, including the
              section titles and appropriate CSS classes to use.
            </p>
            <p>
              Image performance optimizations are also used to make the website
              load faster, by reducing production build size by over 81%.
            </p>
            <p>
              Deployed the app using <strong>AWS Amplify</strong> and{" "}
              <strong>Amazon Route 53</strong> for domain management.
            </p>
            <nav className="projectLinks" aria-label="Portfolio links">
              <ExternalLink
                href="https://github.com/tiagofbsantos/tiagofbsantoscom"
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
              <ExternalLink
                href="https://reacttraining.com/react-router/"
                aria-label="React Router"
              >
                <ReactRouterLogo aria-hidden="true" />
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
