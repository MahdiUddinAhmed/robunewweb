import styled, { keyframes } from "styled-components";
import backgroundImage from '../../images/robuBor.jpg';

// Create a keyframe animation for the floating effect
const floatAnimation = keyframes`
    0% {
    transform: translateX(0);
    }
    50% {
    transform: translateX(-5px); // Adjust the floating distance as needed
    }
    100% {
    transform: translateX(0);
    }
`;

const floatAnimationtwo = keyframes`
    0% {
    transform: translateX(0);
    }
    50% {
    transform: translateX(+5px); // Adjust the floating distance as needed
    }
    100% {
    transform: translateX(0);
    }
`;
const jumpAnimationtwo = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const BorContainer = styled.div`
    all: unset;
    z-index: -1;
    padding: 5px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #373737;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    flex-direction: column;
    && {
    font-family: 'Times New Roman', Times, serif, !important; /* Use Times New Roman as the font */
    
    }
    /*
    background-image: url(${backgroundImage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    */
`;

export const Holderzero = styled.div`
    display: flex;
    padding: 20px;
    width: 70%;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(10, 88, 255, 0.49);
    border-radius: 10px;
    margin-right: -30px;
    animation: ${floatAnimation} 4s ease-in-out infinite;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.22);
    
`;
export const Holder = styled.div`
    display: flex;
    width: 70%;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color:  rgb(63, 64, 77);
    padding: 20px;
    border-radius: 10px;
    margin-left: -30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    animation: ${floatAnimationtwo} 4s ease-in-out infinite;
    &:hover {
    background-color: rgba(50, 60, 60, 0.2);
    transform: scale(1.1);
    color: rgb(255, 255, 255);
    animation: none;
    
};
@media screen and (max-width: 768px){
        flex-direction: column;
        margin-left: 0;
    }
`;

export const Holdertwo = styled.div`
    display: flex;
    padding: 20px;
    width: 70%;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgb(63, 64, 77);
    border-radius: 10px;
    margin-right: -30px;
    animation: ${floatAnimation} 4s ease-in-out infinite;
    box-shadow: 0 4px 6px rgba(102, 102, 102, 0.31);
    &:hover {
    background-color: rgba(50, 60, 60, 0.2);
    transform: scale(1.1);
    color: rgb(255, 255, 255);
    animation: none;
    
    
};
@media screen and (max-width: 768px){
        flex-direction: column;
        margin-right: 0;
    }
`;

export const Segment = styled.div`
    display: flex;
    width: 90%;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #000000;
    text-align: justify;
    @media screen and (max-width: 768px){
        flex-direction: column;
    };

`;

export const  GifImage = styled.img `
    width: 250px;
    height: 250px;
    padding: 20px;
    border-radius: 10px;
`;

export const Image = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 10px;
    align-items: start;
    animation: ${floatAnimation} 4s ease-in-out infinite;
    &:hover {
        animation-name: ${jumpAnimationtwo}; /* Use animation-name property to specify multiple animations */
        animation-duration: 0.5s; /* Duration of each animation */
        animation-timing-function: ease-in-out; /* Timing function for each animation */
        animation-iteration-count: infinite; /* Infinite loop */
        transform: scale(1.1);
        color: rgb(0, 0, 0);
        
    }
`;



export const Title = styled.div `
    margin-top: 80px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    && {
    font-family: 'Times New Roman', Times, serif, !important; /* Use Times New Roman as the font */
    }
`;

export const Desc = styled.div `
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-align: 'justify';
    && {
    font-family: 'Times New Roman', Times, serif, !important; /* Use Times New Roman as the font */
    }

`;