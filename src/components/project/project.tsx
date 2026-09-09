import { Link } from "react-router-dom";
import type { ProjectItem } from "../../data/projects";
import ExternalLink from "../external-link/external-link";
import Picture from "../picture/picture";
import "./project.css";

export type ProjectCardItem = "project" | "miniProject" | "compact";

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
    <article id={id} className={item}>
      <div className="projectText">
        <h3>{name}</h3>
        <p>{description}</p>
        <nav className="projectLinks" aria-label={`${name} links`}>
          {live && (
            <ExternalLink href={live} className="projectLink">
              See Live
            </ExternalLink>
          )}
          <ExternalLink href={source} className="projectLink">
            App Code
          </ExternalLink>
          {apiSource && (
            <ExternalLink href={apiSource} className="projectLink">
              API Code
            </ExternalLink>
          )}
          {moreInfo && (
            <Link to={moreInfo} className="projectLink">
              More Info
            </Link>
          )}
        </nav>
      </div>
      <div className="projectImg">
        <Picture
          src={image.src}
          avif={image.avif}
          webp={image.webp}
          alt={name}
          width={image.width}
          height={image.height}
        />
      </div>
    </article>
  );
}
