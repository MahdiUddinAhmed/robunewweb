import React from 'react';
import styled from 'styled-components';
import { comics } from './ComicData';
import Project from './Project';
const Container = styled.div `
    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color:#010010;
    color: #2d2922;
`;
const Projects = ({item}) => {
  return (
    <Container>
        {comics.map(item =>
            (<Project item = {item} key={item.id}/>
            ))}
    </Container>
  )
}

export default Projects
