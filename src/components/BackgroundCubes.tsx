import React from 'react';
import styled from '@emotion/styled';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(45deg, #0a0a0a, #1a1a1a);
`;

const BackgroundEffect: React.FC = () => {
  return <BackgroundContainer />;
};

export default BackgroundEffect; 