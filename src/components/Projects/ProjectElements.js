import styled from 'styled-components';

export const  Info = styled.div`
     width: 200px; /* Set a fixed width to match the image */
    height: 200px; /* Set a fixed height to match the image */
    border-radius: 50%; /* Make it a perfect circle */
    opacity: 0;
    position: absolute;
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Center both vertically and horizontally */
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(0, 106, 255, 0.767); /* Add shadow effect */
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
    &:hover {
        opacity: 1;
    }
`;



export const ProjectContainer = styled.div `
    flex: 1;
    margin: 5px;
    min-width: 200px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #010010;
    position: relative;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
    &:hover ${Info}{
        opacity: 1;
    }
`;
export const Circle = styled.div `
    width: 100px;
    height: 100px;
    border-radius: 50%;

    position: absolute;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

`;
export const Image = styled.img `
    width: 200px; /* Set the width */
    height: 200px; /* Automatically adjust the height to maintain aspect ratio */
    max-width: 100%; /* Ensure the image doesn't exceed its container */
    border-radius: 50%; /* Make the image circular */
    box-shadow: 0px 0px 40px rgba(73, 194, 255, 0.6); /* Add shadow effect */
    z-index: 2;
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    }
`;


export const Button = styled.button `
    margin-top: 100vh;
    z-index: 3;
    width: 60px;
    height: 40px;
    display: flex;
    margin: 10vh;
    border: none;
    background-color: #00808033;
    color: white;
    cursor: pointer;
    transition: all 0.5s ease &hover;

&:hover {
    background-color: #0022ff49;
    transform: scale(1.1);
};
`

export const linksStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '20vh'
}