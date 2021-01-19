import styled from 'styled-components';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Select, withStyles } from '@material-ui/core';
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

export const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

export const StyledTool = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const StyledToolTitle = styled.span`
  margin-right: 10px;
  font-weight: 500;
`;

export const MaterialSelect = withStyles({
  selectMenu: {
    padding: '12px 15px',
    minWidth: 60,
    maxHeight: 40,
  },
})(Select);

export const MaterialOutlineInput = withStyles({
  input: {
    padding: 5,
    width: 40,
    height: 40,
    boxSizing: 'border-box',
  },
})(OutlinedInput);
