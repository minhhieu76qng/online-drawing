import styled from 'styled-components';
import { Colors } from 'constants/styles/Colors';
import { Shadows } from 'constants/styles/Shadows';

export const StyledHeaderContainer = styled.div`
  min-height: 50px;
  border-bottom: 1px solid ${Colors.SOLITUDE};
  box-shadow: ${Shadows.HEADER};
`;
