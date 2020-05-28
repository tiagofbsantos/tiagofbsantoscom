import React, { Fragment } from "react";
import Navigation from "../components/navigation/navigation";

import { ReactComponent as PwaLogo } from "../assets/pwa.svg";
import { ReactComponent as ReactLogo } from "../assets/react.svg";
import { ReactComponent as NodeLogo } from "../assets/node.svg";
import { ReactComponent as ExpressLogo } from "../assets/express.svg";
import { ReactComponent as PostgresLogo } from "../assets/postgresql.svg";
import { ReactComponent as RedisLogo } from "../assets/redis.svg";
import { ReactComponent as DockerLogo } from "../assets/docker.svg";
import { ReactComponent as YamlLogo } from "../assets/yaml.svg";
import { ReactComponent as Route53Logo } from "../assets/route53.svg";
import { ReactComponent as NginxLogo } from "../assets/nginx.svg";
import { ReactComponent as LetsEncryptLogo } from "../assets/letsencrypt.svg";
import { ReactComponent as JsLogo } from "../assets/javascript.svg";
import { ReactComponent as CssLogo } from "../assets/css.svg";
import { ReactComponent as HtmlLogo } from "../assets/html5.svg";
import { ReactComponent as ClarifaiLogo } from "../assets/clarifai.svg";
import { ReactComponent as JwtLogo } from "../assets/jwt.svg";
import { ReactComponent as ComposeLogo } from "../assets/docker_compose.svg";
import { ReactComponent as GitLogo } from "../assets/git.svg";
import { ReactComponent as GithubLogo } from "../assets/github.svg";
import { ReactComponent as NpmLogo } from "../assets/npm.svg";

import LambdaLogo from "../assets/lambda.png";
import AmplifyLogo from "../assets/amplify.png";
import EbLogo from "../assets/elastic_beanstalk.png";
import RdsLogo from "../assets/rds.png";
import Ec2Logo from "../assets/ec2.png";
import ElastiCacheLogo from "../assets/elasticache.png";
import PWAScore from "../assets/pwasmartvision.png";

import "./project-page.css";
import "../components/project/project.css";

const SmartVisionPage = () => {
  return (
    <Fragment>
      <Navigation page="projectPage" />
      <div className="projectPageBackground">
        <main className="projectPage">
          <article className="text">
            <h1 className="projectTitle">Smart Vision</h1>
            <p>
              A <strong>Single Page Progressive Web App</strong> for detecting
              faces in pictures and recognizing celebrities, given a photo url.
            </p>
            <p>
              Featuring a <strong>React</strong> frontend and a{" "}
              <strong>Node.js</strong> and <strong>Express.js</strong> backend{" "}
              <strong>RESTful API</strong> with a <strong>PostgreSQL</strong>{" "}
              and <strong>Redis</strong> databases, using the{" "}
              <strong>Clarifai API</strong> for face detection and celibrity
              recognition.
            </p>
            <p>
              With user accounts (register and signin functionality), and user
              profiles. Storing the user data in a PostgreSQL database. The
              passwords being stored in hash format encrypted with{" "}
              <strong>bcrypt-nodejs</strong>. Session functionality has also
              been added using <strong>JSON Web Token</strong>, with the token
              being stored in the sessionStorage of the window object. In the
              backend, session information is stored in a Redis database for
              faster access.
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
            <nav className="projectLinks">
              <a
                href="https://smartvision.tiagofbsantos.com/"
                className="projectLink"
              >
                See Live
              </a>
              <a
                href="https://github.com/tiagofbsantos/smart-vision"
                className="projectLink"
              >
                App Code
              </a>
              <a
                href="https://github.com/tiagofbsantos/smart-vision-api"
                className="projectLink"
              >
                API Code
              </a>
            </nav>
          </article>
          <div className="technologies">
            <h2>Technologies used:</h2>
            <div className="logos">
              <a href="https://nodejs.org/en/">
                <NodeLogo />
              </a>
              <a href="https://expressjs.com/">
                <ExpressLogo />
              </a>
              <a href="https://www.postgresql.org/">
                <PostgresLogo />
              </a>
              <a href="https://redis.io/">
                <RedisLogo />
              </a>
              <a href="https://www.docker.com/">
                <DockerLogo />
              </a>
              <a href="https://docs.docker.com/compose/">
                <ComposeLogo />
              </a>
              <a href="https://yaml.org/">
                <YamlLogo />
              </a>
              <a href="https://jwt.io/">
                <JwtLogo />
              </a>
              <a href="https://www.clarifai.com/">
                <ClarifaiLogo />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">
                <PwaLogo />
              </a>
              <a href="https://reactjs.org/">
                <ReactLogo />
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
              <a href="https://aws.amazon.com/lambda/">
                <img src={LambdaLogo} alt="AWS Lambda Logo" />
              </a>
              <a href="https://aws.amazon.com/elasticbeanstalk/">
                <img src={EbLogo} alt="Elastic Beanstalk Logo" />
              </a>
              <a href="https://aws.amazon.com/elasticache/">
                <img src={ElastiCacheLogo} alt="Amazon ElastiCache Logo" />
              </a>
              <a href="https://aws.amazon.com/rds/">
                <img src={RdsLogo} alt="Amazon RDS Logo" />
              </a>
              <a href="https://aws.amazon.com/ec2/">
                <img src={Ec2Logo} alt="Amazon EC2 Logo" />
              </a>
              <a href="https://aws.amazon.com/amplify/">
                <img src={AmplifyLogo} alt="AWS Amplify Logo" />
              </a>
              <a href="https://aws.amazon.com/route53/">
                <Route53Logo />
              </a>
              <a href="https://nginx.org/">
                <NginxLogo />
              </a>
              <a href="https://letsencrypt.org/">
                <LetsEncryptLogo />
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

export default SmartVisionPage;
