import React from "react";
import Project from "../Project/Project";
import  "./Projects.css";

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
					/>
				);
			})}
		</main>
	);
}

export default Projects;
