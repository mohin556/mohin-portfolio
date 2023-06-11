import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
const Home = () => {
    return (
        <div className='home-container'>
            <Header/>
           
            <Services/>
            <Projects/>
            <AboutMe/>
            <Contact/>
        </div>
    );
};

export default Home;