import React, { Fragment } from "react";
import { HashLink as Link } from "react-router-hash-link";

import { ReactComponent as Medium } from "../../assets/medium.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";

import "./navigation.css";

const Navigation = ({ page, id }) => {
  return (
    <nav className="navigation">
      <nav className="navLeft">
        {page === "homepage" && (
          <Fragment>
            <a href="#projects" className="svgWrapper">
              <svg className="projectsSvg" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <rect
                    x="0"
                    y="0"
                    className="projectsShape"
                    height="32"
                    width="110"
                  />
                  <text
                    x="55"
                    y="16"
                    className="svgtext"
                    textAnchor="middle"
                    alignmentBaseline="central"
                  >
                    Projects
                  </text>
                </g>
              </svg>
            </a>
            <a href="#miniProjects" className="svgWrapper">
              <svg
                className="miniProjectsSvg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <rect
                    x="0"
                    y="0"
                    className="miniProjectsShape"
                    height="32"
                    width="150"
                  />
                  <text
                    x="75"
                    y="16"
                    className="svgtext"
                    textAnchor="middle"
                    alignmentBaseline="central"
                  >
                    Mini Projects
                  </text>
                </g>
              </svg>
            </a>
          </Fragment>
        )}
        {page === "projectPage" && (
          <Link to={`/#${id}`} className="svgWrapper">
            <svg className="backSvg" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect
                  x="0"
                  y="0"
                  className="backShape"
                  height="32"
                  width="70"
                />
                <text
                  x="35"
                  y="16"
                  className="svgtext"
                  textAnchor="middle"
                  alignmentBaseline="central"
                >
                  Back
                </text>
              </g>
            </svg>
          </Link>
        )}
      </nav>
      <nav className="navRight">
        <a href="https://medium.com/@tiagofbsantos/deploy-https-node-postgres-redis-react-to-aws-ef252567200d?source=friends_link&sk=c153c74d65621a9d28f944a3e422338f">
          <Medium />
        </a>
        <a href="https://github.com/tiagofbsantos">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/tiagofbsantos">
          <LinkedIn />
        </a>
        <a href="mailto:santosfbtiago@gmail.com?Subject=Hello">
          <Mail />
        </a>
      </nav>
    </nav>
  );
};

export default Navigation;
