import React from 'react';
import './Projects.css';
import project1 from '../../image/project1.PNG';
import project2 from '../../image/Carwashh.PNG';
const Projects = () => {
    return (
        <section id="projects">
         
        <div class="project container">
          
         <div class="projects-header">
           <h1 class="section-title" >recent <span>projects</span></h1>
         </div>
         <div class="all-projects">
            <div class="project-item">
             <div class="project-info">
              <h1>Project 1</h1>
              <h2>BD-CAR-WASH</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, nisi perspiciatis vero facilis adipisci quae, facere ipsum doloremque explicabo hic aut, maiores cupiditate? Impedit tenetur ex, sapiente rem labore molestiae corporis minus hic magnam, nisi incidunt possimus eius aut doloribus?</p>
             </div>
             <div class="project-img">
               <img src={project1} alt=""/>
             </div>
            </div>
            <div class="project-item">
             <div class="project-info">
              <h1>Project 2</h1>
              <h2>BD-CAR-WASH</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, nisi perspiciatis vero facilis adipisci quae, facere ipsum doloremque explicabo hic aut, maiores cupiditate? Impedit tenetur ex, sapiente rem labore molestiae corporis minus hic magnam, nisi incidunt possimus eius aut doloribus?</p>
             </div>
             <div class="project-img">
               <img src={project2} alt=""/>
             </div>
            </div>
            
            
         
            </div>
          </div>
   </section>

    );
};

export default Projects;