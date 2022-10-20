import React from "react";
import './porfo.css';
import {PorfoData} from '../../data/portfo';
import PorfoCard from "./porfo-card";
import Separator from "../../common/separator";

function Portfo (){
    const data = PorfoData
    return (
        <div className="porfo">
            <Separator/>
           <label className="section-title">Portfolio</label>
           <div>
                {data.map((project)=>{
                    return <PorfoCard project = {project}/>;
                })}
           </div>
        </div>
    )

}

export default Portfo;