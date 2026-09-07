import Project, { type ProjectCardItem } from "../project/project";
import type { ProjectItem } from "../../data/projects";
import "./projects.css";

type ProjectsProps = {
  item: ProjectCardItem;
  section: string;
  sectionTitle: string;
  projectsList: ProjectItem[];
};

export default function Projects({
  item,
  section,
  sectionTitle,
  projectsList,
}: ProjectsProps) {
  return (
    <main id={section} className={section}>
      <h1>{sectionTitle}</h1>
      {projectsList.map((project) => (
        <Project
          key={project.id ?? project.name}
          image={project.image}
          name={project.name}
          description={project.description}
          source={project.source}
          apiSource={project.apiSource}
          live={project.live}
          item={item}
          moreInfo={project.moreInfo}
          id={project.id}
        />
      ))}
    </main>
  );
}
