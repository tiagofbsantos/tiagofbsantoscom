import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import SmartVisionPage from "./pages/smart-vision-page";
import KittenGeneratorPage from "./pages/kitten-generator-page";
import TiagoFBSantosCom from "./pages/tiagofbsantoscom-page";

/* import TrackVisibility from "../components/track-visibility/track-visibility"; */

/*const projectsObserver = document.querySelector(".projects");

const options = {};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		console.log(entry); //entry.target	
	});
}, options);

observer.observe(projectsObserver);*/
/* <TrackVisibility onVisible={() => console.log("I see you!")}>
</TrackVisibility> */

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/projects/smartvision">
        <SmartVisionPage />
      </Route>
      <Route path="/projects/kittengenerator">
        <KittenGeneratorPage />
      </Route>
      <Route path="/projects/tiagofbsantoscom">
        <TiagoFBSantosCom />
      </Route>
    </Switch>
  );
}

export default App;
