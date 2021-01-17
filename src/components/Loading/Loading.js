import React from 'react';
import LogoWithName from 'assets/images/logo-with-name.png';
import { StyledContainer, StyledLogo } from './Loading.styled';

function Loading() {
  return (
    <StyledContainer>
      <StyledLogo src={LogoWithName} />
    </StyledContainer>
  );
}

export default Loading;
