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
import { ReactComponent as ReactRouterLogo } from "../assets/reactrouter.svg";
import AmplifyLogo from "../assets/amplify.png";

import "./project-page.css";
import "../components/project/project.css";

const TiagoFBSantosCom = () => {
  return (
    <Fragment>
      <Navigation page="projectPage" />
      <div className="projectPageBackground">
        <main className="projectPage">
          <article className="text">
            <h1 className="projectTitle">Tiago F. B. Santos .com</h1>
            <p>
              The personal portfolio website created to showcase my work as a
              Full Stack Developer.
            </p>
            <p>
              It's a <strong>Progressive Web App</strong>, using{" "}
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
              load faster.
            </p>
            <p>
              Deployed the app using <strong>AWS Amplify</strong> and{" "}
              <strong>Amazon Route 53</strong> for domain management.
            </p>
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
              <a href="https://reacttraining.com/react-router/">
                <ReactRouterLogo />
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
          </div>
        </main>
        <nav className="projectLinks">
          <a
            href="https://github.com/tiagofbsantos/tiagofbsantoscom"
            className="projectLink"
          >
            App Code
          </a>
        </nav>
      </div>
    </Fragment>
  );
};

export default TiagoFBSantosCom;
