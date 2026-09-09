import { WORK } from "../../data/content";
import "./work.css";

export default function Work() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <h2 id="work-title">Work</h2>
      {WORK.map((role) => (
        <article key={`${role.company}-${role.dates}`} className="workRole">
          <h3>{role.title}</h3>
          <p className="workMeta">
            {role.company} · {role.dates} · {role.location}
          </p>
          <p className="workSummary">{role.summary}</p>
          {role.bullets.length > 0 && (
            <ul className="workBullets">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </section>
  );
}
