import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import NotFoundPage from "./pages/not-found-page";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import DocumentMeta from "./components/document-meta/document-meta";
import SiteFooter from "./components/site-footer/site-footer";

const SmartVisionPage = lazy(() => import("./pages/smart-vision-page"));
const KittenGeneratorPage = lazy(() => import("./pages/kitten-generator-page"));
const TiagoFBSantosCom = lazy(() => import("./pages/tiagofbsantoscom-page"));

function RouteFallback() {
  return <div className="routeFallback" role="status" aria-label="Loading" />;
}

function App() {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <DocumentMeta />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/smartvision" element={<SmartVisionPage />} />
          <Route
            path="/projects/kittengenerator"
            element={<KittenGeneratorPage />}
          />
          <Route
            path="/projects/tiagofbsantoscom"
            element={<TiagoFBSantosCom />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <SiteFooter />
    </>
  );
}

export default App;
