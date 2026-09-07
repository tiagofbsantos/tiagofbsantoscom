import { Link } from "react-router-dom";
import type { ProjectItem } from "../../data/projects";
import "./project.css";

export type ProjectCardItem = "project" | "miniProject";

type ProjectProps = ProjectItem & {
  item: ProjectCardItem;
};

export default function Project({
  image,
  name,
  description,
  source,
  apiSource,
  live,
  item,
  moreInfo,
  id,
}: ProjectProps) {
  return (
    <section id={id} className={item}>
      <article className="projectText">
        <h2>{name}</h2>
        <p>{description}</p>
        <nav className="projectLinks">
          {live && (
            <a href={live} className="projectLink">
              See Live
            </a>
          )}
          <a href={source} className="projectLink">
            App Code
          </a>
          {apiSource && (
            <a href={apiSource} className="projectLink">
              API Code
            </a>
          )}
          {moreInfo && (
            <Link to={moreInfo} className="projectLink">
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
}
