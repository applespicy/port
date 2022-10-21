import React from "react";
import SocialContact from "../../common/social-contact";
import './about.css'

function About(){
    return(
        <div className="about">
          <div className="about-top">
            <div className="about-info">
                Hello!!, My name <span className="info-name">Oluwaseyi Oshinowo</span><br/>
                i love experimenting with the WEB
                <p>A software Developer with Passion for learning and innovative creation</p>
            </div>
            <div className="about-photo">
                <img src={require('../../../assest/pic1.png')} alt ="" className='picture'/>
            </div>
          </div>
            <SocialContact/>
        </div>
    )

}

export default About;