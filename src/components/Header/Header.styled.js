import styled from 'styled-components';
import { Colors } from 'constants/styles/Colors';
import { Shadows } from 'constants/styles/Shadows';

export const StyledHeaderContainer = styled.div`
  height: 50px;
  max-height: 50px;
  border-bottom: 1px solid #ccc;
  box-shadow: ${Shadows.HEADER};
  background-color: ${Colors.SOLITUDE};
  display: flex;
  padding: 5px 15px;
  align-items: center;
`;

export const StyledAppLogo = styled.img`
  display: block;
  width: 40px;
`;
