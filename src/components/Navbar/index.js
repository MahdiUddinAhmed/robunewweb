import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Logo,
    MobileIcon,
    Nav,
    NavItem,
    NavLinks,
    NavMenue,
    NavbarContainer,
    Navlogo
} from './NavbarElements';



const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false); // Corrected typo here
        }
    };

    useEffect(() => { // Corrected useEffect syntax
        window.addEventListener('scroll', changeNav);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, []);

const toggleHome =() =>{
    scroll.scrollToTop();
}

return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
                <Navlogo to ='/' onClick={toggleHome}><Logo src={process.env.PUBLIC_URL + '/robulogo.png'} alt="Logo" />ROBU</Navlogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenue>
                    <NavItem>
                        <NavLinks
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="panel">Panel</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                        to="projects"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                        to="footer"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Contact Us</NavLinks>
                    </NavItem>
                </NavMenue>
        </NavbarContainer>
    </Nav>
    </>
);
};

export default Navbar;
