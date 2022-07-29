import React from "react";
import ProjectItems from "./ProjectItems";
import "./Projects.css"
import TexasAM from "../../images/TAM-LogoBox.png"

function Projects(){
    return(
        
        <div className="projects">
            <h1>PROJECTS I'VE WORKED ON</h1>
            <div className="pro_container">
                <div className="pro_items">
                    <ProjectItems 
                        src={TexasAM}
                        text="SketchPals"
                        label="University Research"/>
                    <ProjectItems 
                        src={TexasAM}
                        text="SketchPals"
                        label="University Research"/>
                    <ProjectItems 
                        src={TexasAM}
                        text="SketchPals"
                        label="University Research"/>
                    <ProjectItems 
                        src={TexasAM}
                        text="SketchPals"
                        label="University Research"/>
                </div>
            </div>
        </div>
    )
}
export default Projects