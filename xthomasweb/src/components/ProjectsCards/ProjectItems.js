import React from "react";
import Popup from "reactjs-popup";



function ProjectItems(props){
    return(
        <>  <Popup trigger={
                <div className="item">
                    <div className="item_link">
                        <img src={props.src} alt="SketchPals" className="item_img"/>
                        
                        <div className="item_info">
                            <h5 className="item_text">{props.text}</h5>
                            
                        </div>
                    </div>
                </div>} modal nested>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}> &times; </button>
                            <div className="modal-title">{props.text}</div>
                            <div className="modal-content">
                                {' '}
                                {props.content}
                            </div>
                        </div>
                    )}
            </Popup>
        </>
    )
}
export default ProjectItems