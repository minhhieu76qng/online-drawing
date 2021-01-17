import { Colors } from 'constants/styles/Colors';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.SOLITUDE};
`;

export const StyledLogo = styled.img`
  width: 200px;
  display: block;
`;
