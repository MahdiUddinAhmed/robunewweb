import React, { useState } from 'react';
import Borsegment from '../components/BOR';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Credit from '../components/Credit';

const Borpage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    
return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Borsegment/>
        <Footer/>
        <Credit/>
    </div>
)
}

export default Borpage
