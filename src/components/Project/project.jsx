import React from "react";
import "./project.css";

//class Project extends React.Component {
const Project = ({
  image,
  name,
  description,
  source,
  apiSource,
  live,
  section,
}) => {
  //const { image, name, description, source, apiSource, live } = this.props;
  return (
    <section className={`${section}`}>
      <article className="projectText">
        <h2>{name}</h2>
        <p>{description}</p>
        <nav className="projectLinks">
          <a href={live} className="projectLink">
            See Live
          </a>
          <a href={source} className="projectLink">
            App Code
          </a>
          {apiSource !== "" && (
            <a href={apiSource} className="projectLink">
              API Code
            </a>
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
