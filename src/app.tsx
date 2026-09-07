import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import NotFoundPage from "./pages/not-found-page";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";

const SmartVisionPage = lazy(() => import("./pages/smart-vision-page"));
const KittenGeneratorPage = lazy(() => import("./pages/kitten-generator-page"));
const TiagoFBSantosCom = lazy(() => import("./pages/tiagofbsantoscom-page"));

function RouteFallback() {
  return <div className="routeFallback" role="status" aria-label="Loading" />;
}

function App() {
  return (
    <>
      <ScrollToTop />
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
    </>
  );
}

export default App;
