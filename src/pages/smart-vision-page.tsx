import Navigation from "../components/navigation/navigation";
import ExternalLink from "../components/external-link/external-link";
import TechLogo from "../components/tech-logo/tech-logo";

import pwaLogo from "../assets/pwa.svg?url";
import reactLogo from "../assets/react.svg?url";
import nodeLogo from "../assets/node.svg?url";
import expressLogo from "../assets/express.svg?url";
import postgresLogo from "../assets/postgresql.svg?url";
import redisLogo from "../assets/redis.svg?url";
import dockerLogo from "../assets/docker.svg?url";
import yamlLogo from "../assets/yaml.svg?url";
import route53Logo from "../assets/route53.svg?url";
import nginxLogo from "../assets/nginx.svg?url";
import letsEncryptLogo from "../assets/letsencrypt.svg?url";
import tsLogo from "../assets/typescript.svg?url";
import cssLogo from "../assets/css.svg?url";
import htmlLogo from "../assets/html5.svg?url";
import clarifaiLogo from "../assets/clarifai.svg?url";
import jwtLogo from "../assets/jwt.svg?url";
import composeLogo from "../assets/docker_compose.svg?url";
import gitLogo from "../assets/git.svg?url";
import githubLogo from "../assets/github.svg?url";
import npmLogo from "../assets/npm.svg?url";
import lambdaLogo from "../assets/lambda.png";
import amplifyLogo from "../assets/amplify.png";
import ebLogo from "../assets/elastic_beanstalk.png";
import rdsLogo from "../assets/rds.png";
import ec2Logo from "../assets/ec2.png";
import elastiCacheLogo from "../assets/elasticache.png";
import pwaScore from "../assets/pwasmartvision.png";

import "./project-page.css";
import "../components/project/project.css";

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
  { href: "https://yaml.org/", src: yamlLogo, label: "YAML" },
  { href: "https://jwt.io/", src: jwtLogo, label: "JSON Web Token" },
  { href: "https://www.clarifai.com/", src: clarifaiLogo, label: "Clarifai" },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
    src: pwaLogo,
    label: "Progressive Web Apps",
  },
  { href: "https://react.dev/", src: reactLogo, label: "React" },
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
  { href: "https://aws.amazon.com/lambda/", src: lambdaLogo, label: "AWS Lambda" },
  {
    href: "https://aws.amazon.com/elasticbeanstalk/",
    src: ebLogo,
    label: "AWS Elastic Beanstalk",
  },
  {
    href: "https://aws.amazon.com/elasticache/",
    src: elastiCacheLogo,
    label: "Amazon ElastiCache",
  },
  { href: "https://aws.amazon.com/rds/", src: rdsLogo, label: "Amazon RDS" },
  { href: "https://aws.amazon.com/ec2/", src: ec2Logo, label: "Amazon EC2" },
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
  { href: "https://nginx.org/", src: nginxLogo, label: "Nginx" },
  {
    href: "https://letsencrypt.org/",
    src: letsEncryptLogo,
    label: "Let's Encrypt",
  },
  { href: "https://git-scm.com/", src: gitLogo, label: "Git" },
  { href: "https://github.com/", src: githubLogo, label: "GitHub" },
  { href: "https://www.npmjs.com/", src: npmLogo, label: "npm" },
];

export default function SmartVisionPage() {
  return (
    <>
      <Navigation page="projectPage" id="smartvision" />
      <div className="projectPageBackground">
        <main id="main" tabIndex={-1} className="projectPage">
          <article className="text">
            <h1 className="projectTitle">Smart Vision</h1>
            <p>
              A <strong>Single Page Responsive Progressive Web App</strong> for
              detecting faces in pictures and recognizing celebrities, given a
              photo URL.
            </p>
            <p>
              Originally written in <strong>JavaScript</strong> using{" "}
              <strong>React</strong> class components and .then. Refactored to
              use <strong>TypeScript</strong>, <strong>React</strong> functional
              components and async await.
            </p>
            <p>
              Featuring a <strong>React</strong> frontend and a{" "}
              <strong>Node.js</strong> and <strong>Express.js</strong> backend{" "}
              <strong>RESTful API</strong> with <strong>PostgreSQL</strong> and{" "}
              <strong>Redis</strong> databases, using the{" "}
              <strong>Clarifai API</strong> for face detection and celebrity
              recognition.
            </p>
            <p>
              With user accounts (register and sign in functionality), and user
              profiles. Storing the user data in a PostgreSQL database. The
              passwords being stored in hash format encrypted with{" "}
              <strong>bcrypt</strong>. Session functionality has also been added
              using <strong>JSON Web Token</strong>, with the token being stored
              in the sessionStorage of the window object. In the backend,
              session information is stored in a Redis database for faster
              access.
            </p>
            <p>
              The user has a default avatar generated based on his name.
              Changing the user name also changes the default avatar. Custom
              avatar feature is supported.
            </p>
            <p>
              User inputs are protected through validation. Using onKeyDown for
              input enter key action support.
            </p>
            <p>
              Includes an <strong>AWS Lambda</strong> serverless function for
              calculating the appropriate rank badge.
            </p>
            <p>
              The backend is a fully dockerized multi-container API, with 3
              separate <strong>Docker</strong> images (Node, Postgres, and
              Redis). Making full use of the docker cache for faster build
              times. These containers are then orchestrated using{" "}
              <strong>Docker Compose</strong>.
            </p>
            <p>
              The App frontend is deployed through <strong>AWS Amplify</strong>,
              using <strong>Amazon Route 53</strong> for managing the subdomain
              name.
            </p>
            <p>
              The API backend is deployed using{" "}
              <strong>AWS Elastic Beanstalk</strong> with{" "}
              <strong>Amazon RDS</strong> for the Postgres database, and{" "}
              <strong>Amazon ElastiCache</strong> for the Redis database. Plus{" "}
              <strong>Amazon EC2</strong> and <strong>Nginx</strong>{" "}
              customization for enabling single instance <strong>HTTPS</strong>{" "}
              using <strong>Let's Encrypt</strong>.
            </p>
            <nav className="projectLinks" aria-label="Smart Vision links">
              <ExternalLink
                href="https://smartvision.tiagofbsantos.com/"
                className="projectLink"
              >
                See Live
              </ExternalLink>
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
