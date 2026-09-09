import Navigation from "../components/navigation/navigation";
import ExternalLink from "../components/external-link/external-link";
import TechLogo from "../components/tech-logo/tech-logo";
import { PROJECT_INTROS, WRITING } from "../data/content";

import reactLogo from "../assets/react.svg?url";
import nodeLogo from "../assets/node.svg?url";
import expressLogo from "../assets/express.svg?url";
import postgresLogo from "../assets/postgresql.svg?url";
import redisLogo from "../assets/redis.svg?url";
import dockerLogo from "../assets/docker.svg?url";
import nginxLogo from "../assets/nginx.svg?url";
import tsLogo from "../assets/typescript.svg?url";
import composeLogo from "../assets/docker_compose.svg?url";
import ebLogo from "../assets/elastic_beanstalk.png";
import pwaScore from "../assets/pwasmartvision.png";

import "./project-page.css";
import "../components/project/project.css";

const intro = PROJECT_INTROS.find((page) => page.path === "/projects/smartvision");

const logos = [
  { href: "https://nodejs.org/en/", src: nodeLogo, label: "Node.js" },
  { href: "https://expressjs.com/", src: expressLogo, label: "Express" },
  { href: "https://www.postgresql.org/", src: postgresLogo, label: "PostgreSQL" },
  { href: "https://redis.io/", src: redisLogo, label: "Redis" },
  { href: "https://www.docker.com/", src: dockerLogo, label: "Docker" },
  {
    href: "https://docs.docker.com/compose/",
    src: composeLogo,
    label: "Docker Compose",
  },
  { href: "https://react.dev/", src: reactLogo, label: "React" },
  {
    href: "https://www.typescriptlang.org/",
    src: tsLogo,
    label: "TypeScript",
  },
  {
    href: "https://aws.amazon.com/elasticbeanstalk/",
    src: ebLogo,
    label: "AWS Elastic Beanstalk",
  },
  { href: "https://nginx.org/", src: nginxLogo, label: "Nginx" },
];

export default function SmartVisionPage() {
  return (
    <>
      <Navigation page="projectPage" id="smartvision" />
      <div className="projectPageBackground">
        <main id="main" tabIndex={-1} className="projectPage">
          <article className="text">
            <h1 className="projectTitle">Smart Vision</h1>
            <p>{intro?.intro}</p>
            <p>
              A React frontend with a Node.js and Express REST API. User
              accounts and profiles in PostgreSQL, with passwords hashed using
              bcrypt, and sessions issued as JSON Web Tokens and cached in
              Redis. An AWS Lambda function calculates the rank badge.
            </p>
            <p>
              The API ships as three Docker images, Node, Postgres and Redis,
              layered to reuse the build cache and orchestrated with Docker
              Compose. The frontend is deployed on AWS Amplify with Amazon Route
              53 for the subdomain; the API ran on AWS Elastic Beanstalk with
              Amazon RDS and Amazon ElastiCache, terminating HTTPS on the EC2
              instance itself with NGINX and a Let's Encrypt certificate rather
              than paying for a load balancer. That deployment is the subject of
              the{" "}
              <ExternalLink className="textLink" href={WRITING.url}>
                article linked from the homepage
              </ExternalLink>
              .
            </p>
            <p>
              Originally written in JavaScript with React class components and
              promise chains, then refactored to TypeScript, function components
              and async/await.
            </p>
            <p>
              The backend is intentionally not deployed. Clarifai, the vision
              API behind the face and celebrity detection, has since been
              discontinued, and keeping an RDS instance and an ElastiCache node
              running for a demo is a standing monthly bill for no benefit. Both
              repositories are complete and the deployment is documented, so the
              code is the artifact here rather than a live URL.
            </p>
            <nav className="projectLinks" aria-label="Smart Vision links">
              <ExternalLink
                href="https://github.com/tiagofbsantos/smart-vision"
                className="projectLink"
              >
                App Code
              </ExternalLink>
              <ExternalLink
                href="https://github.com/tiagofbsantos/smart-vision-api"
                className="projectLink"
              >
                API Code
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
                height={124}
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
