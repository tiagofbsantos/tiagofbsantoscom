import React from "react";
import "./navigation.css";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <nav className="navLeft">
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
          <svg className="miniProjectsSvg" xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="0"
                y="0"
                className="miniProjectsShape"
                height="32"
                width="155"
              />
              <text
                x="70"
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
      </nav>
      <nav className="navRight">
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
