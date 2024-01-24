import React from 'react';
import { Button, Image, Info, ProjectContainer, linksStyle } from './ProjectElements';

const Project = ({item}) => {
return (
    <ProjectContainer>
        <Image src = {item.coverimg}/>
            <Info>
                <Button><a style={linksStyle} href= {item.web}>Learn More!</a></Button>
            </Info>
    </ProjectContainer>
)
}

export default Project
