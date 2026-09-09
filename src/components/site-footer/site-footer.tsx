import ExternalLink from "../external-link/external-link";
import { LAST_UPDATED } from "../../data/content";
import "./site-footer.css";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <p>
        <a href="mailto:santosfbtiago@gmail.com">santosfbtiago@gmail.com</a>
        {" · "}
        <ExternalLink href="https://github.com/tiagofbsantos">GitHub</ExternalLink>
        {" · "}
        <ExternalLink href="https://www.linkedin.com/in/tiagofbsantos">
          LinkedIn
        </ExternalLink>
      </p>
      <p>Last updated {LAST_UPDATED}</p>
    </footer>
  );
}
