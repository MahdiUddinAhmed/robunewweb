import React from 'react';
import {
    AboutContainer,
    Aboutdesc,
    ActivityContainer,
    ArabicDoor,
    BOR,
    ClassicalKnowledge,
    DescContainer,
    Events,
    Icon,
    NeonText,
    OutlineEmojiEvents,
    Outreach,
    Prototype,
    StudentBold,
    
    Title
} from './AboutElements';

const About = () => {
return (
    <AboutContainer id="about">
        <Aboutdesc>
            <DescContainer>
            <Title><h1>About Us</h1></Title>
            <Title>Robotics Club of BRAC University - ROBU</Title>
            </DescContainer>
        </Aboutdesc>
        <ActivityContainer>
            <BOR><Icon to="/bor" onClick={() => window.scrollTo(0, 0)}><StudentBold/></Icon><NeonText>Basics of Robotics</NeonText></BOR>
            <Outreach><Icon to="/robforall"onClick={() => window.scrollTo(0, 0)}><ClassicalKnowledge/><NeonText>Robotics for All</NeonText></Icon></Outreach>
            <Prototype><Icon to="/prototypeevent"znClick={() => window.scrollTo(0, 0)}><ArabicDoor/><NeonText>Prototype</NeonText></Icon></Prototype>
            <Events><OutlineEmojiEvents to ='/'/><NeonText>Events</NeonText></Events>
        </ActivityContainer>
    </AboutContainer>
)
}

export default About
