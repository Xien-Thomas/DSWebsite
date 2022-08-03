import React from "react";
import ProjectItems from "./ProjectItems";
import "./Projects.css";
import TexasAM from "../../images/TAM-LogoBox.png";
import pBlocks from "../../images/poly-blocks-logo.png";
import Nasa from "../../images/nasa-logo-web-rgb.png"

function Projects(){
    return(
        
        <div className="projects">
            <h1>PROJECTS I'VE WORKED ON</h1>
            <div className="pro_container">
                <div className="pro_items">
                    <ProjectItems 
                        src={TexasAM}
                        text="SketchPals"
                        label="University Research"
                        content="content1"/>
                    <ProjectItems 
                        src={TexasAM}
                        text="NASA Project"
                        label="University Research"
                        content="content12"/>
                    <ProjectItems 
                        src={pBlocks}
                        text="Polymorphic Blocks"
                        label="University Undergrade Research"
                        content="content13"/>
                    <ProjectItems 
                        src={Nasa}
                        text="NASA Intern Project"
                        label="Internship"
                        content="content14"
                        Link="https://www.nasa.gov/mission_pages/servir/software-developed-by-servir-interns-aids-nepal-earthquake-response.html"/>
                </div>
            </div>
        </div>
    )
}
export default Projects