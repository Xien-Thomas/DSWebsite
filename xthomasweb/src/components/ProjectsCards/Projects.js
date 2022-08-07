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
                        label="University Graduate Research"
                        content="Children start developing critical fine motor skills in a early age that can contribute significantly to their education: reading, writing, and drawing
                                 Its recommended to evalute and manage these skills by seeing a Pediatricians for direct assessments. The direct assessments require parent participation and
                                 is later seen by the Pediatrician's office hours. Unfortuantly, these assessments are very limited in time because
                                 there are more children than they are pediatricians. I proposed that we create a system that will collect free-form sketches from parents and children that
                                 can differentiate each sketch using Machine Learning. The accuracy of the system is around 90%."
                        pLanguaes="Python, Java, SciKit, Android development"/>
                    <ProjectItems 
                        src={TexasAM}
                        text="NASA: '/ Astronaut spacesuit comfort '/"
                        label="University Graduate Research"
                        content="During walk missions in space, Astronauts are only given three different types of space suits that can be uncomfortable and could cause health
                                 problems later in their career.
                                 In collaboartion with NASA Johnson Space Flight Center and the Embedded Systems Lab at Texas A&/M, we made a system that can tighlty correlate
                                 Astronaut's comfort level inside of a space suit by fusing the Microsoft Kinect and Inertial Measurement
                                 Units. The degree error of the system was 8.9 from the golden standard; The Vicon motion capture system"
                        pLanguaes="C#, Matlab"/>
                    <ProjectItems 
                        src={pBlocks}
                        text="Polymorphic Blocks"
                        label="University Undergrad Research"
                        content="Over the summer of 2015, I was tasked to improve and add to an existing system 
                                that gamify mathematical proofs using Javascript and Ruby on Rails, resulting
                                in solving more complex proofs. "
                        pLanguaes="Javascript, HTML, CSS, Ruby on rails"/>
                    <ProjectItems 
                        src={Nasa}
                        text="NASA: '/ Clip Zip and Ship '/"
                        label="Undergrad Internship"
                        Link="https://www.nasa.gov/mission_pages/servir/software-developed-by-servir-interns-aids-nepal-earthquake-response.html"
                        content="SERVIR Coordination Office at NASA's Marshall Space Flight Center at Huntsville assigned me a project to process Large Raster files into smaller subsets
                                that are recieved more easily for developing contries. The software was expanded to help recovery efforts from National Disasters."
                        pLanguaes="ArcGis, Python"/>
                </div>
            </div>
        </div>
    )
}
export default Projects