import React from 'react';
import './Services.css';
import service1 from '../../image/service.png';
import service2 from '../../image/service2.png';
import service3 from '../../image/service3.jpg';

const Services = () => {
    return (
        <section  id="services" >
        <div class="services container">
           <div class="service-top">
            <h1 class="section-title">serv<span>i</span>ces</h1>
            <p>
              I specialize in React development and c.
            </p>
           </div>


           <div class="service-bottom">
            <div class="service-item">
              <div>
                <img  class="icon" src={service1} alt=""/>
              </div>
              <h2> interface design</h2>
              <p>I can create visually stunning and intuitive user interfaces that are tailored to your specific needs and requirements.</p>

            </div>
            <div class="service-item">
                <div>
                  <img class="icon" src={service2}/>
                </div>
                <h2>Front-end development</h2>
                <p> I can develop responsive and user-friendly websites and web applications using HTML, CSS, and JavaScript. I am also proficient in various front-end frameworks and libraries such as React.</p>
  
              </div>
              <div class="service-item">
                <div>
                  <img class="icon" src={service1} alt=""/>
                </div>
                <h2>Website maintenance</h2>
                <p>can provide ongoing maintenance and support for your website, ensuring that it remains up-to-date and secure.</p>
  
              </div>
              <div class="service-item">
                <div>
                  <img class="icon" src={service1} alt=""/>
                </div>
                <h2>Consultation and collaboration</h2>
                <p> I am a strong collaborator and communicator, able to work closely with other members of a development team such as back-end developers, designers, and project managers. I am also available for consultation on front-end development projects.</p>
  
              </div>

        </div>




        </div>
    </section>
    );
};

export default Services;