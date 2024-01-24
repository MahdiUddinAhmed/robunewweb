import React from 'react';
import styled from 'styled-components';

const CreditContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Credit = () => {
  return (
    <CreditContainer>
      <span>Created by Mahdi Uddin Ahmed 2023.</span>
      <span>
        <a href="https://github.com/MahdiUddinAhmed" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {' | '}
        <a href="https://www.linkedin.com/in/mahdi-uddin-ahmed-1014311a0/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {' | '}
        <a href="https://www.facebook.com/mahdi.ahmed.3388/" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </span>
    </CreditContainer>
  );
};

export default Credit;
