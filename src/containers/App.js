import React, { Fragment } from 'react';
import Navigation from "../components/Navigation/Navigation";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import TrackVisibility from "../components/TrackVisibility/TrackVisibility";
import SmartVision from "../assets/SmartVision.png";
import BenderFriends from "../assets/BenderFriends.png";

const projectsList = [
	{
		image: SmartVision,
		name: "Smart Vision",
		description: "A React web app for finding faces in photos",
		source: "https://github.com/tiagofbsantos/smart-vision",
		apiSource: "https://github.com/tiagofbsantos/smart-vision-api",
		live: "https://smart-vision.herokuapp.com/"
	},
	{
		image: BenderFriends,
		name: "Bender Friends",
		description: "An interactive Progressive Web App with React and Redux for finding bender friends",
		source: "https://github.com/tiagofbsantos/bender-friends",
		apiSource: "",
		live: "https://tiagofbsantos.github.io/bender-friends/"
	}
];

/*const projectsObserver = document.querySelector(".projects");

const options = {};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		console.log(entry); //entry.target	
	});
}, options);

observer.observe(projectsObserver);*/


function App() {
  return (
  	<Fragment>
 	   	<Navigation />
    	<AboutMe />
    	<TrackVisibility onVisible={() => console.log("I see you!")}>
    		<Projects projectsList={projectsList} />
    	</TrackVisibility>
    	<Skills />
    </Fragment>
  );
}

export default App;
