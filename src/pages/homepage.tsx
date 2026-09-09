import Navigation from "../components/navigation/navigation";
import AboutMe from "../components/about-me/about-me";
import Work from "../components/work/work";
import Writing from "../components/writing/writing";
import Projects from "../components/projects/projects";
import { miniProjectsList, projectsList } from "../data/projects";

export default function HomePage() {
  return (
    <>
      <Navigation page="homepage" />
      <main id="main" tabIndex={-1}>
        <AboutMe />
        <Work />
        <Writing />
        <Projects
          item="project"
          section="projects"
          sectionTitle="Projects"
          projectsList={projectsList}
        />
        <Projects
          item="compact"
          section="miniProjects"
          sectionTitle="Mini Projects"
          sectionNote="Small things I built while learning, kept for the record. 2019 to 2020."
          projectsList={miniProjectsList}
        />
      </main>
    </>
  );
}
