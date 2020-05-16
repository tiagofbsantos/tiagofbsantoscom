import React from "react";
import Project from "../project/project";
import "./projects.css";

const Projects = ({ projectsList }) => {
  return (
    <main id="projects" className="projects">
      <h1>Projects</h1>
      {projectsList.map((project, i) => {
        return (
          <Project
            key={i}
            image={projectsList[i].image}
            name={projectsList[i].name}
            description={projectsList[i].description}
            source={projectsList[i].source}
            apiSource={projectsList[i].apiSource}
            live={projectsList[i].live}
            section="project"
          />
        );
      })}
    </main>
  );
};

export default Projects;
