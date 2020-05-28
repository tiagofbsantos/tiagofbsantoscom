import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

const Project = ({
  image,
  name,
  description,
  source,
  apiSource,
  live,
  item,
  moreInfo,
}) => {
  return (
    <section className={`${item}`}>
      <article className="projectText">
        <h2>{name}</h2>
        <p>{description}</p>
        <nav className="projectLinks">
          {live !== "" && (
            <a href={live} className="projectLink">
              See Live
            </a>
          )}
          <a href={source} className="projectLink">
            App Code
          </a>
          {apiSource !== "" && (
            <a href={apiSource} className="projectLink">
              API Code
            </a>
          )}
          {moreInfo !== "" && (
            <Link to={`${moreInfo}`} className="projectLink">
              More Info
            </Link>
          )}
        </nav>
      </article>
      <div className="projectImg">
        <img alt={name} src={image} />
      </div>
    </section>
  );
};

export default Project;
