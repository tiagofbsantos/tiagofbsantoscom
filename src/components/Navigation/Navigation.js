import React from "react";
import  "./Navigation.css";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";

const Navigation = () => {
	return (
		<nav className="navigation">
			<nav className="navLeft">
				<a href="#projects" className="svgWrapper">
				    <svg className="projectsSvg" xmlns="http://www.w3.org/2000/svg">
				    	<g>
				      		<rect x="0" y="0" className="projectsShape" height="32" width="110" />
				      		<text x="55" y="16" className="svgtext" textAnchor="middle" alignmentBaseline="central">Projects</text>
				     	</g>
				    </svg>
				</a>
				<a href="#skills" className="svgWrapper">
					<svg className="skillsSvg" xmlns="http://www.w3.org/2000/svg">
				    	<g>
				      		<rect x="0" y="0" className="skillsShape" height="32" width="90" />
				      		<text x="45" y="16" className="svgtext" textAnchor="middle" alignmentBaseline="central">Skills</text>
				     	</g>
				    </svg>
				</a>
			</nav>
			<nav className="navRight">
					<a href="https://github.com/tiagofbsantos">
						<GitHub />			
					</a>
					<a href="https://www.linkedin.com/in/tiagofbsantos">
						<LinkedIn />
					</a>
					<a href="mailto:tiago.filipe.bz.santos@gmail.com?Subject=Hello">
						<Mail />			
					</a>
			</nav>
		</nav>
	);
}

export default Navigation;