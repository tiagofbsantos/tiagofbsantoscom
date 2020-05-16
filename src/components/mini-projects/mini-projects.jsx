import React from "react";
import Project from "../project/project";
import "./mini-projects.css";

const MiniProjects = ({ miniProjectsList }) => {
  return (
    <section id="miniProjects" className="miniProjects">
      <h1>Mini Projects</h1>
      {miniProjectsList.map((project, i) => {
        return (
          <Project
            key={i}
            image={miniProjectsList[i].image}
            name={miniProjectsList[i].name}
            description={miniProjectsList[i].description}
            source={miniProjectsList[i].source}
            apiSource={miniProjectsList[i].apiSource}
            live={miniProjectsList[i].live}
            section="miniProject"
          />
        );
      })}
    </section>
  );
};

export default MiniProjects;
