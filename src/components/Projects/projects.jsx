import React from "react";
import Project from "../project/project";
import "./projects.css";

const Projects = ({ item, section, sectionTitle, projectsList }) => {
  return (
    <main id={`${section}`} className={`${section}`}>
      <h1>{sectionTitle}</h1>
      {projectsList.map((project, i) => {
        return (
          <Project
            key={i}
            image={project.image}
            name={project.name}
            description={project.description}
            source={project.source}
            apiSource={project.apiSource}
            live={project.live}
            item={item}
            moreInfo={project.moreInfo}
          />
        );
      })}
    </main>
  );
};

export default Projects;
