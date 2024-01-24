import Lottie from "lottie-react";
import React from 'react';
import robot from "./robot.json";

import { AnimatedIcon, CampContainer, Desc, DescContainer, HeadingContainter, Title } from './campaignstyled';

const Camp = () => {
return (
    <CampContainer>
        <HeadingContainter>
            <AnimatedIcon><Lottie animationData={robot} loop={true} /></AnimatedIcon>
            <Title> Robotics for All </Title>
        </HeadingContainter>
        <DescContainer>
            <Desc>
                <p>Robotics for All is one of our flagship projects. In this
                event we tend to go to differnt school and colleges with
                our experienced batch of instructors and aim to each children
                robotics hands on for free with hands on experience using our
                components and experience.<br /><br /></p>

                <p> We take this opportunity to let the children be familiarized
                with our flagship robotics projects and their team to get and
                idea regarding the logistics, skills, experience and management
                needed for a team to compete internationally and share expeirence
                hoping to inspire the next genatation of robotics enthusiasts.</p>
            </Desc>
        </DescContainer>
    </CampContainer>
)
}

export default Camp
