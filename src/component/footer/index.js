import React from "react";
import './footer.css'
import SocialContact from "../common/social-contact";


function Footer(){
    return(
        <div>
       
    <h1 className="contact">You can contact me through any of the platform listed below</h1>
    
    <SocialContact/>
        </div>
    )
}

export default Footer;