import Navigation from "../components/navigation/navigation";
import ExternalLink from "../components/external-link/external-link";

import PwaLogo from "../assets/pwa.svg?react";
import ReactLogo from "../assets/react.svg?react";
import NodeLogo from "../assets/node.svg?react";
import ExpressLogo from "../assets/express.svg?react";
import PostgresLogo from "../assets/postgresql.svg?react";
import RedisLogo from "../assets/redis.svg?react";
import DockerLogo from "../assets/docker.svg?react";
import YamlLogo from "../assets/yaml.svg?react";
import Route53Logo from "../assets/route53.svg?react";
import NginxLogo from "../assets/nginx.svg?react";
import LetsEncryptLogo from "../assets/letsencrypt.svg?react";
import TsLogo from "../assets/typescript.svg?react";
import CssLogo from "../assets/css.svg?react";
import HtmlLogo from "../assets/html5.svg?react";
import ClarifaiLogo from "../assets/clarifai.svg?react";
import JwtLogo from "../assets/jwt.svg?react";
import ComposeLogo from "../assets/docker_compose.svg?react";
import GitLogo from "../assets/git.svg?react";
import GithubLogo from "../assets/github.svg?react";
import NpmLogo from "../assets/npm.svg?react";

import LambdaLogo from "../assets/lambda.png";
import AmplifyLogo from "../assets/amplify.png";
import EbLogo from "../assets/elastic_beanstalk.png";
import RdsLogo from "../assets/rds.png";
import Ec2Logo from "../assets/ec2.png";
import ElastiCacheLogo from "../assets/elasticache.png";
import PWAScore from "../assets/pwasmartvision.png";

import "./project-page.css";
import "../components/project/project.css";

export default function SmartVisionPage() {
  return (
    <>
      <Navigation page="projectPage" id="smartvision" />
      <div className="projectPageBackground">
        <main className="projectPage">
          <article className="text">
            <h1 className="projectTitle">Smart Vision</h1>
            <p>
              A <strong>Single Page Responsive Progressive Web App</strong> for
              detecting faces in pictures and recognizing celebrities, given a
              photo url.
            </p>

            <p>
              Originally written in <strong>Javascript</strong> using{" "}
              <strong>React</strong> class components and .then. Refactored to
              use <strong>Typescript</strong>, <strong>React</strong> functional
              components and async await.
            </p>

            <p>
              Featuring a <strong>React</strong> frontend and a{" "}
              <strong>Node.js</strong> and <strong>Express.js</strong> backend{" "}
              <strong>RESTful API</strong> with a <strong>PostgreSQL</strong>{" "}
              and <strong>Redis</strong> databases, using the{" "}
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
              <ExternalLink href="https://nodejs.org/en/" aria-label="Node.js">
                <NodeLogo aria-hidden="true" />
              </ExternalLink>

              <ExternalLink href="https://expressjs.com/" aria-label="Express">
                <ExpressLogo aria-hidden="true" />
              </ExternalLink>

              <ExternalLink
                href="https://www.postgresql.org/"
                aria-label="PostgreSQL"
              >
                <PostgresLogo aria-hidden="true" />
              </ExternalLink>

              <ExternalLink href="https://redis.io/" aria-label="Redis">
                <RedisLogo aria-hidden="true" />
              </ExternalLink>

              <ExternalLink href="https://www.docker.com/" aria-label="Docker">
                <DockerLogo aria-hidden="true" />
              </ExternalLink>

              <ExternalLink
                href="https://docs.docker.com/compose/"
                aria-label="Docker Compose"
              >
                <ComposeLogo aria-hidden="true" />
              </ExternalLink>

              <ExternalLink href="https://yaml.org/" aria-label="YAML">
                <YamlLogo aria-hidden="true" />
              </ExternalLink>

              <ExternalLink href="https://jwt.io/" aria-label="JSON Web Token">
                <JwtLogo aria-hidden="true" />
              </ExternalLink>

              <ExternalLink href="https://www.clarifai.com/" aria-label="Clarifai">
                <ClarifaiLogo aria-hidden="true" />
              </ExternalLink>

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
                href="https://www.typescriptlang.org/"
                aria-label="TypeScript"
              >
                <TsLogo aria-hidden="true" />
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
                href="https://aws.amazon.com/lambda/"
                aria-label="AWS Lambda"
              >
                <img src={LambdaLogo} alt="" />
              </ExternalLink>

              <ExternalLink
                href="https://aws.amazon.com/elasticbeanstalk/"
                aria-label="AWS Elastic Beanstalk"
              >
                <img src={EbLogo} alt="" />
              </ExternalLink>

              <ExternalLink
                href="https://aws.amazon.com/elasticache/"
                aria-label="Amazon ElastiCache"
              >
                <img src={ElastiCacheLogo} alt="" />
              </ExternalLink>

              <ExternalLink
                href="https://aws.amazon.com/rds/"
                aria-label="Amazon RDS"
              >
                <img src={RdsLogo} alt="" />
              </ExternalLink>

              <ExternalLink
                href="https://aws.amazon.com/ec2/"
                aria-label="Amazon EC2"
              >
                <img src={Ec2Logo} alt="" />
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

              <ExternalLink href="https://nginx.org/" aria-label="Nginx">
                <NginxLogo aria-hidden="true" />
              </ExternalLink>

              <ExternalLink
                href="https://letsencrypt.org/"
                aria-label="Let's Encrypt"
              >
                <LetsEncryptLogo aria-hidden="true" />
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
