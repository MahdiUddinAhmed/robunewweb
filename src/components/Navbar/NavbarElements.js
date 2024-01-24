import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

// Rest of your styled components.....

export const Nav =  styled.nav`
    background:  rgba(0, 0, 0, 0.7);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

`;

export const Navlogo = styled(LinkR)`
    color: #2987d9;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;


export const NavMenue = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #ffff;
    display: flex;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    height: 100%;
    padding: 0 1rem;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
    &:hover{
        color: #2987d9;
        transition: 0.2s ease-in-out;
    }
`
export const Logo = styled.img`
    margin: 10px;
    max-width: 60px;
    height: auto;
`