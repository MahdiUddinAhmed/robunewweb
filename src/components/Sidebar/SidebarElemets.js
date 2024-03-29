import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import styled from "styled-components";


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out; /* Corrected from 0ms.3s to 0.3s */
    background-color: #0d0d0d;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; /* Removed unnecessary curly braces */
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; /* Removed unnecessary curly braces */
    /*top: 0;*/
`;


export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    &:hover{
        color: #2987d9;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarMenue = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;