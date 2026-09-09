import Project, { type ProjectCardItem } from "../project/project";
import type { ProjectItem } from "../../data/projects";
import "./projects.css";

type ProjectsProps = {
  item: ProjectCardItem;
  section: string;
  sectionTitle: string;
  projectsList: ProjectItem[];
  sectionNote?: string;
};

export default function Projects({
  item,
  section,
  sectionTitle,
  projectsList,
  sectionNote,
}: ProjectsProps) {
  const cards = projectsList.map((project) => (
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
  ));

  return (
    <section id={section} className={section} aria-labelledby={`${section}-title`}>
      <h2 id={`${section}-title`}>{sectionTitle}</h2>
      {sectionNote && <p className="sectionNote">{sectionNote}</p>}
      {item === "compact" ? <div className="compactGrid">{cards}</div> : cards}
    </section>
  );
}
