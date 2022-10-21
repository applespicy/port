import {useRef} from "react";
import emailjs from '@emailjs/browser';
import './contact.css'

function Contact(){
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fd30y3l', 'template_1yr432n', form.current, 'mu-_5QFWGvoD43ApT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    
    return(
      
       <div className="container">
        
        
        <h2 className="text-center">Contact</h2>
        <form  ref={form} onSubmit ={sendEmail}className="formcontrol">
        <input type="text"  className ="Input" placeholder="Name" name ='user_name' required/>
        <input type="email" className ="Input"placeholder="Email" name ='user_email' required/>
        <input type="text" className ="Input" placeholder="Subject" name ='subject' required/>
         </form>
         <textarea name ="message" className ="text"cols ="30" rows="10" placeholder="Type message"></textarea>
        <button type="submit"className="btn">Submit</button>
       
       </div>
       
       
      
       
       
    )
}

export default Contact