import React from "react";
import './body.css'
import  About from './about/index'
import Portfo from './portfo/index'
import Contact from './contact/index'
import Resume from "./resume/index";


function Body(){
    return<div className="body">
       <section id ='aboutme'>
        <About/>
       </section>
       <section id ='portfolio'>
        <Portfo/>
       </section>
       <section id ='contact'>
        <Contact/>
       </section>
       <section id ='resume'>
        <Resume/>
       </section>
       
    </div>
}

export default Body;