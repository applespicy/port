import React from "react";
import './social-contact.css'
import {SocialData} from '../../data/social';

function SocialContact(){
    const data = SocialData;
    
    return(
        <div>
            {data.map((item)=>{
                return(
                    <a href={item.link}>
                        <div className="social-icon-div">
                        <img src={item.icon} alt = ""className ='social-icon'/>

                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact;