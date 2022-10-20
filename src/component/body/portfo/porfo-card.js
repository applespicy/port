import React from "react";
import './porfo-card.css';

function PorfoCard ({project}){
    return (
        <div className="project-card">
          <div className="project-info">
            <label className="project-title">{project.title}</label>
            <div className="project-links">
            {project.demo && (
            <a className="project-link" href={project.demo}>
                <div className="link-button">
                <i class="uil uil-globe"></i>Demo</div>
                </a> )}
            </div>
                <p>{project.about}</p>
          </div>
          <img src={project.image} alt =""className ='project-photo'/>
        </div>
    )
}

export default PorfoCard;