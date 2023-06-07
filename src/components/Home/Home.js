import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div className='home-container'>
            <Header/>
            <h1>Home Section</h1>
            <AboutMe/>
            <Contact/>
        </div>
    );
};

export default Home;