import { GiArabicDoor, GiClassicalKnowledge } from "react-icons/gi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { Link as LinkR } from 'react-router-dom';
import styled from "styled-components";
import backgroundImage from '../../images/Aboutbg.jpg';


export const NeonText = styled.div`
    color: #00f3ff !important; /* Neon blue color */
    /* Add any other CSS properties you need for this container */
`;
export const Icon = styled(LinkR)`
    text-decoration: none;
    
`;

export const StudentBold = styled(PiStudentBold)`
    cursor: pointer;
    margin: 20px;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
`;


export const ClassicalKnowledge = styled(GiClassicalKnowledge)`
    margin: 20px;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
`;


export const ArabicDoor = styled(GiArabicDoor)`
    margin: 20px;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
`;

export const OutlineEmojiEvents = styled(MdOutlineEmojiEvents)`
    margin: 20px;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
`;

export const AboutContainer = styled.div`
    position: relative; /* Add this for pseudo-element positioning */
    
    /* Set the background color to your desired color */
    background-color: rgb(1, 1, 18);

    /* Set the background image */
    background-image: url(${backgroundImage});
    background-size: 85% 100%;
    background-repeat: no-repeat;
    background-position: center center;

    /* Center the container */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: auto;

    /* Pseudo-element to create a gradient overlay */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: radial-gradient(ellipse at center, rgba(193, 227, 255, 0.08) 50%, rgba(1, 1, 18, 1) 80%);
    }

    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        background-size: 85% 100%;
        &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: radial-gradient(ellipse at center, rgba(193, 227, 255, 0.08) 50%, rgba(1, 1, 18, 1)80%);
    }
    }
    
`;

export const Aboutdesc = styled.div`

    display: flex;
    flex-direction: row; /* Add flex-direction to stack elements vertically */
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 60px;
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    }
`;
export const ImageContainer = styled.div`
    width: 200px;
    height: auto;
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    align-items: center;
    justify-content: center;
`;
export const DescContainer = styled.div`
    display: flex;
    width: auto;
    align-items: center;
    flex-direction: column; /* Add flex-direction to stack elements vertically */
    width: 700px;
    margin-top: 20px; /* Add margin-top to separate title and description */
    @media screen and (max-width: 768px){
        display: flex;
        margin-bottom: 20px;
        justify-content: center;
    }
`;

export const Title = styled.h1`

    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    margin-bottom: 20px; /* Add margin-bottom to separate title and description */
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    }
`;

export const Desc = styled.div`
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    text-align: center; /* Center-align the description text */
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    }

`;

export const ActivityContainer = styled.div`
    cursor: pointer;
    display: flex;
    width: auto;
    align-items: center;
    flex-direction: row; /* Add flex-direction to stack elements horrizontally */
    width: 700px;
    margin-top: 80px; /* Add margin-top to separate title and description */
    margin-bottom: 100px;
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-height: 300px;
    }
`;

export const BOR = styled.div`
    display: flex;
    justify-content: center;
    z-index:2;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 200px;
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    text-align: center; /* Center-align the description text */
    border: 2px solid #002d57;
    border-radius: 10px;
    margin-bottom: 20px;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    & ${StudentBold} {
        color: white;
    }

    /* Use RGBA color values for the linear-gradient background */
    background: linear-gradient(to bottom, rgba(0, 0, 143, 0.33), rgba(0, 0, 0, 0.33));
    /* The "0.7" in the rgba values controls the transparency (0.0 = fully transparent, 1.0 = fully opaque) */
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    }
    &:hover {
    background-color: rgba(255, 255, 255, 0.23);
    transform: scale(1.1);
    & ${StudentBold} {
        color:  rgb(0, 242, 255);
    }

};
`;


export const Outreach = styled.div`
    display: flex;
    justify-content: center;
    z-index:2;
    cursor: pointer;
    flex-direction: column;
    width: 300px;
    height: 200px;
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    text-align: center; /* Center-align the description text */
    border: 2px solid #002d57;
    border-radius: 10px;
    margin-bottom: 20px;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 143, 0.33), rgba(0, 0, 0, 0.33));
    & ${ClassicalKnowledge} {
        color: white;
    }

    /* Use RGBA color values for the linear-gradient background */
    background: linear-gradient(to bottom, rgba(0, 0, 143, 0.33), rgba(0, 0, 0, 0.33));
    /* The "0.7" in the rgba values controls the transparency (0.0 = fully transparent, 1.0 = fully opaque) */
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    }
    &:hover {
    background-color: rgba(255, 255, 255, 0.23);
    transform: scale(1.1);
    & ${ClassicalKnowledge} {
        color:  rgb(0, 242, 255);
    }

};

`;

export const Prototype = styled.div`
    display: flex;
    justify-content: center;
    z-index:2;
    cursor: pointer;
    flex-direction: column;
    width: 300px;
    height: 200px;
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    text-align: center; /* Center-align the description text */
    border: 2px solid #002d57;
    border-radius: 10px;
    margin-bottom: 20px;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 143, 0.33), rgba(0, 0, 0, 0.33));
    & ${ArabicDoor} {
        color: white;
    }

    /* Use RGBA color values for the linear-gradient background */
    background: linear-gradient(to bottom, rgba(0, 0, 143, 0.33), rgba(0, 0, 0, 0.33));
    /* The "0.7" in the rgba values controls the transparency (0.0 = fully transparent, 1.0 = fully opaque) */
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    }
    &:hover {
    background-color: rgba(255, 255, 255, 0.23);
    transform: scale(1.1);
    & ${ClassicalKnowledge} {
        color:  rgb(0, 242, 255);
    }

};

`;





export const Events = styled.div`
    display: flex;
    justify-content: center;
    z-index:2;
    cursor: pointer;
    flex-direction: column;
    width: 300px;
    height: 200px;
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    text-align: center; /* Center-align the description text */
    border: 2px solid #002d57;
    border-radius: 10px;
    margin-bottom: 20px;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 143, 0.33), rgba(0, 0, 0, 0.33));
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    }
    &:hover {
    background-color: rgba(255, 255, 255, 0.23);
    transform: scale(1.1);
    color: rgb(0, 242, 255);
};
`;



