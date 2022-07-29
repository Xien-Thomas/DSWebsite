import React from "react";
import { Button } from "../Buttons/Buttons";


function ProjectItems(props){
    return(
        <>
            <div className="item">
                <div className="item_link">
                    <img src={props.src} alt="SketchPals" className="item_img"/>
                    
                    <div className="item_info">
                        <h5 className="item_text">{props.text}</h5>
                        <Button classeName="item_button" buttonStyle="btn--outline">View More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectItems