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
      <Route exact path="/" component={HomePage} />
      <Route path="/projects/smartvision" component={SmartVisionPage} />
      <Route path="/projects/kittengenerator" component={KittenGeneratorPage} />
      <Route path="/projects/tiagofbsantoscom" component={TiagoFBSantosCom} />
    </Switch>
  );
}

export default App;
