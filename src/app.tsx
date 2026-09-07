import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import SmartVisionPage from "./pages/smart-vision-page";
import KittenGeneratorPage from "./pages/kitten-generator-page";
import TiagoFBSantosCom from "./pages/tiagofbsantoscom-page";
import NotFoundPage from "./pages/not-found-page";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop />
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
    </>
  );
}

export default App;
