import React from 'react';
import './web.css'

function Web (){
    return(
        <div className='web'>
           <div className='web-option'>
            <a href='#aboutme'>
            <i class="fi fi-rs-user option-icon"></i>About me 
            </a>
           </div>
           <div className='web-option'>
            <a href="#portfolio">
            <i class="fi fi-rr-briefcase option-icon"></i>Portfolio
            </a>
           </div>
           <div className='web-option'>
            <a href='#contact'>
            <i class="fi fi-rr-form option-icon"></i>Contact</a>
           </div>
           <div className='web-option'>
            <a href='#resume'>
            <i class="fi fi-rr-book-alt"></i>Resume</a>
           </div>
        </div>
    )
}

export default Web