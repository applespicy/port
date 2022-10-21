import React from "react";
import "./resume.css"
import Separator from "../../common/separator";
import resume from "../../../assest/resume.pdf"

function Resume (){
    return(
        <div>
         <Separator/>
        <h2>Resume</h2>
        <div className="download">
        <a href={resume} download = " olu resume.pdf">Download CV</a>
        <i class ="fi-rr-cloud-download download-icon"/>        
        </div>
        </div>
    )
}

export default Resume