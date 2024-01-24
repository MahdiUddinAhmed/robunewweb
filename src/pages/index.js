import React, { useState } from 'react';
import About from '../components/About';
import Credit from '../components/Credit';
import Footer from '../components/Footer';
import Contact from '../components/Footer/Contact';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Ourproject from '../components/Projects/Ourproject';
import Projects from '../components/Projects/Projects';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    
return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <About/>
        <Ourproject/>
        <Projects/>
        <Contact/>
        <Footer/>
        <Credit/>
    </div>
)
}

export default Home
