import React from "react";
import './contact.css'

function Contact(){
    return(
       <form className="form">
       <h1>Contact Form</h1>

       <label>Name</label>
       <input placeholder="Name"></input>

       <label>Email</label>
       <input placeholder="Email"></input>

       <label>Message</label>
      <textarea placeholder="Message"></textarea>
       </form>
           
       
    )
}

export default Contact