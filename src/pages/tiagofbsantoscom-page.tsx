import Navigation from "../components/navigation/navigation";
import ExternalLink from "../components/external-link/external-link";
import TechLogo from "../components/tech-logo/tech-logo";

import pwaLogo from "../assets/pwa.svg?url";
import reactLogo from "../assets/react.svg?url";
import route53Logo from "../assets/route53.svg?url";
import tsLogo from "../assets/typescript.svg?url";
import cssLogo from "../assets/css.svg?url";
import htmlLogo from "../assets/html5.svg?url";
import gitLogo from "../assets/git.svg?url";
import githubLogo from "../assets/github.svg?url";
import npmLogo from "../assets/npm.svg?url";
import reactRouterLogo from "../assets/reactrouter.svg?url";
import amplifyLogo from "../assets/amplify.png";
import pwaScore from "../assets/pwatiagofbsantoscom.png";

import "./project-page.css";
import "../components/project/project.css";

const logos = [
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
    src: pwaLogo,
    label: "Progressive Web Apps",
  },
  { href: "https://react.dev/", src: reactLogo, label: "React" },
  {
    href: "https://reactrouter.com/",
    src: reactRouterLogo,
    label: "React Router",
  },
  {
    href: "https://www.typescriptlang.org/",
    src: tsLogo,
    label: "TypeScript",
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

export default function TiagoFBSantosCom() {
  return (
    <>
      <Navigation page="projectPage" id="tiagofbsantoscom" />
      <div className="projectPageBackground">
        <main id="main" tabIndex={-1} className="projectPage">
          <article className="text">
            <h1 className="projectTitle">Tiago F. B. Santos .com</h1>
            <p>
              The personal portfolio website created to showcase my work as a
              Lead Software Engineer.
            </p>
            <p>
              It is a <strong>Responsive Progressive Web App</strong> built with{" "}
              <strong>Vite</strong>, <strong>TypeScript</strong>,{" "}
              <strong>React</strong>, and <strong>React Router</strong>.
            </p>
            <p>
              Including several animations in <strong>CSS3</strong> and{" "}
              <strong>SVG</strong>. Using <strong>semantic HTML5</strong>.
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
              Project screenshots and the profile photo ship as{" "}
              <strong>AVIF</strong> and <strong>WebP</strong> with JPEG
              fallbacks so the first load stays small.
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
                height={127}
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
