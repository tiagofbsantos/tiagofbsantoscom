import Navigation from "../components/navigation/navigation";
import AboutMe from "../components/about-me/about-me";
import Projects from "../components/projects/projects";
import { miniProjectsList, projectsList } from "../data/projects";

export default function HomePage() {
  return (
    <>
      <Navigation page="homepage" />
      <AboutMe />
      <main>
        <Projects
          item="project"
          section="projects"
          sectionTitle="Projects"
          projectsList={projectsList}
        />
        <Projects
          item="miniProject"
          section="miniProjects"
          sectionTitle="Mini Projects"
          projectsList={miniProjectsList}
        />
      </main>
    </>
  );
}
