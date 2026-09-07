import { Link } from "react-router-dom";
import Navigation from "../components/navigation/navigation";
import "../components/project/project.css";
import "./not-found-page.css";

export default function NotFoundPage() {
  return (
    <>
      <Navigation page="notFound" />
      <main className="notFound">
        <h1>Page not found</h1>
        <p>That address is not a page on this site.</p>
        <Link to="/" className="projectLink">
          Home
        </Link>
      </main>
    </>
  );
}
