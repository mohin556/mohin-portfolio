import React from 'react';
import './AboutMe.css';
import myPic from '../../image/Title (3) (2).jpg';


const AboutMe = () => {
    return (
        <section id="about" >

        <div class="about container">
   
          <div class="about-left">
             <div class="about-img">
              <img src={myPic} alt="" />
             </div>
          </div>
   
           <div class="about-right">
             <h1 class="section-title">
               about <span>me</span>
             </h1>
             <h2>Front End Developper</h2>
             <p>Hello! My name is Mohin AL Hoque, and I am a front-end developer with 3 years of experience in the field. I have a passion for creating beautiful and user-friendly websites and web applications using the latest front-end technologies.
   
               I have expertise in HTML, CSS, and JavaScript, as well as proficiency in various front-end frameworks and libraries such as React. I am skilled in creating responsive designs that work seamlessly across different devices and screen sizes.
               
               In addition to my technical skills, I am also a strong collaborator and communicator, able to work effectively with other members of a development team such as back-end developers, designers, and project managers. I am constantly learning and staying up-to-date with the latest front-end trends and technologies to ensure that I am creating cutting-edge and efficient designs.
               
               Thank you for taking the time to review my portfolio, and I am excited for the opportunity to work with you!</p>
             <a href="" type="button" class="cta">Download Resume</a>
           </div>
   
        </div>
       </section>
   
    );
};

export default AboutMe;