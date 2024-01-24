import React from "react";
import styled from "styled-components";


const Container = styled.div`
    height: 450px;
    background-color: #010010;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 100px;
    font-weight: 500;
`
const Contact  = () => {
    return (
        <Container id="footer">
            <h1>Contact us</h1>
        </Container>
    )
}

export default Contact