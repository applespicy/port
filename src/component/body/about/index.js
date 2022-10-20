import React from "react";
import SocialContact from "../../common/social-contact";
import './about.css'

function About(){
    return(
        <div className="about">
          <div className="about-top">
            <div className="about-info">
                hello!!, My name <span className="info-name">Oluwaseyi Oshinowo</span><br/>
                i love experimenting with the WEB
            </div>
            <div className="about-photo">
                <img src={require('../../../assest/coding.png').default} alt ="" className='picture'/>
            </div>
          </div>
            <SocialContact/>
        </div>
    )

}

export default About;