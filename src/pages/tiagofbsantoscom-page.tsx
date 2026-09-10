import Navigation from "../components/navigation/navigation";
import ExternalLink from "../components/external-link/external-link";
import TechLogo from "../components/tech-logo/tech-logo";
import { PROJECT_INTROS } from "../data/content";

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

const intro = PROJECT_INTROS.find(
  (page) => page.path === "/projects/tiagofbsantoscom",
);

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
            <p>{intro?.intro}</p>
            <p>
              Every indexed route is prerendered at build time. A Vite plugin
              writes per-route HTML with its own title, description, canonical
              URL, Open Graph tags and JSON-LD, and injects the page text as
              static markup: the full work history and writing on the homepage,
              the title and intro on each project page. Crawlers, social
              unfurlers and automated readers get it without executing
              JavaScript.
            </p>
            <p>
              Screenshots and the profile photo ship as AVIF and WebP with JPEG
              or PNG fallbacks, fonts as woff2, and the project routes are
              code-split, so the first load stays small. The service worker is
              Vite PWA in auto-update mode, precaching the shell so repeat
              visits work offline.
            </p>
            <p>
              The animated navigation labels are inline SVG with stroke-dasharray
              transitions rather than images, so they stay sharp at any size.
            </p>
            <p>
              Accessibility: semantic landmarks, a skip link, visible focus
              states, and a prefers-reduced-motion path that disables the
              animations.
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
