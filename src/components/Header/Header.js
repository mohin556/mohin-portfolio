import React from 'react';
import './Header.css';
const Header = () => {
    return (
           <div className='header-main'>
              {/* <section id="header">
        <div class="header container">
          <div class="nav-bar">
           <div class="brand">
             <a href=""><h1><span>M</span>OHIN <span>A</span>L <span>H</span>OQUE</h1></a>
           </div>
           <div class="nav-list">
             <div class="hamburger"> <div class="bar"></div> </div>
             <ul>
               <li><a href="#header" data-after="Home">Home</a></li>
               <li><a href="#services" data-after="Service" >Services</a></li>
               <li><a href="#projects" data-after="Projects" >Projects</a></li>
               <li><a href="#about" data-after="About" >About</a></li>
               <li><a href="#contact"data-after="Contact" >Contact</a></li>
             </ul>
           </div>
          </div>
        </div>
     </section> */}
     <section id="hero">
         <div class="hero container">
             <div>
                <h1>Hello,<span></span> </h1>
                <h1>My Name is <span></span></h1>
                <h1>Mohin Al Hoque<span></span></h1>
                <a href="#projects" type="button" class="cta"> Portfolio </a>
             </div>
         </div>
      </section>

           </div>
     
          


   
    );
};

export default Header;