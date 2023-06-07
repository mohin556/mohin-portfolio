import React from 'react';
import './Contact.css';
import homeIcon from '../../image/homeIcon.png';
import emailIcon from '../../image/email.png';
import phoneIcon from '../../image/phone.png';


const Contact = () => {
    return (
        <section id="contact" >
        <div class="contact container">
          <div>
            <h1 class="section-title">Contact <span>Info</span></h1>
          </div>
           <div class="contact-items">
               <div class="contact-item">
                <div class="icon">
                  <img  src={phoneIcon} alt=""/>
                </div>
               <div class="contact-info">
                <h1>Phone</h1>
                <h2>+8801815199556</h2>
                <h2>+8801516130971</h2>
               </div>
               </div>
               <div class="contact-item">
                <div class="icon">
                  <img  src={emailIcon} alt=""/>
                </div>
               <div class="contact-info">
                <h1>Email</h1>
                <h2>mohinalhoque@gmail.com</h2>
                <h2>mohinalhaq@gmail.com</h2>
               </div>
           
               </div>
               <div class="contact-item">
                <div class="icon">
                  <img  src={homeIcon} alt=""/>
      
                </div>
               <div class="contact-info">
                <h1>Adress</h1>
                <h2>City : Chattogram</h2>
                <h2>Bangladesh</h2>
               </div>
           
               </div>
              
  
           </div>
  
          
        </div>
  
      </section>
  
    );
};

export default Contact;