import React from "react";
import styled from "styled-components";


const Container = styled.div`
    height: 300px;
    background-color: #010010;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 100px;
    font-weight: 500;
`
const Ourproject  = () => {
    return (
        <Container id="projects">
            <h1>Our Projects</h1>
        </Container>
    )
}

export default Ourproject