import React from 'react';
import './mobile.css'

function Mobile ({isOpen, setIsOpen}){
    return(
        <div className='mobile'>
            <div className='close icon' onClick ={()=>setIsOpen(!isOpen)}>
            <i class="fi-rr-cross-circle"></i>
            </div>
            <div className='mobile-options'>
            <div className='mobile-option'>
            <a href='#aboutme'>
            <i class="fi fi-rs-user option-icon"></i>About me 
            </a>
           </div>
           <div className='mobile-option'>
            <a href="#portfolio">
            <i class="fi fi-rr-briefcase option-icon"></i>Portfolio
            </a>
           </div>
           <div className='mobile-option'>
            <a href='#contact'>
            <i class="fi fi-rr-form option-icon"></i>Contact</a>
           </div>
           <div className='mobile-option'>
            <a href='#resume'>
            <i class="fi fi-rr-book-alt"></i>Resume</a>
           </div>
            </div>
           
        </div>
    )
}

export default Mobile;