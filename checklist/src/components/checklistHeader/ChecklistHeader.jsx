import React from "react";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChecklistHeader.css"

function ChecklistHeader(){
    return(
        <div className="header">
            <h1> <FontAwesomeIcon icon={faClipboard} className="icon"/>To-Do List</h1>
        </div>  
    )
}

export default ChecklistHeader;