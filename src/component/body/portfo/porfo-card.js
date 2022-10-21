import React from "react";
import './porfo-card.css';

function PorfoCard ({project}){
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
            <div className="project-links">
                {project.github && (
                <a className="project-link" href={project.github}>
                <div className="link-button">
                <i class="fi-rr-globe"></i>github</div>
                </a> )}
                </div>
                    <p>{project.about}</p>
          </div>
                    <img src={project.image} alt =""className ='project-photo'/>
        </div>
    )
}

export default PorfoCard;