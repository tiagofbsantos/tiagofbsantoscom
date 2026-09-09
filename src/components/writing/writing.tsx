import ExternalLink from "../external-link/external-link";
import { WRITING } from "../../data/content";
import "../project/project.css";
import "./writing.css";

export default function Writing() {
  return (
    <section id="writing" className="writing" aria-labelledby="writing-title">
      <h2 id="writing-title">Writing</h2>
      <article className="writingCard">
        <p className="writingLabel">{WRITING.label}</p>
        <h3>
          <ExternalLink href={WRITING.url}>{WRITING.title}</ExternalLink>
        </h3>
        <p>{WRITING.blurb}</p>
        <p className="writingMetrics">
          {WRITING.date} · {WRITING.metrics}
        </p>
        <ExternalLink href={WRITING.url} className="projectLink">
          Read It
        </ExternalLink>
      </article>
    </section>
  );
}
