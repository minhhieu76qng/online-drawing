import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

export const StyledButton = withStyles({
  root: {
    minHeight: 40,
    backgroundColor: (props) => props.background,
    transition: 'background-color ease 0.3s',
    willChange: 'transition',
    color: (props) => props.color,
    opacity: (props) => (props.disabled ? '0.7' : '1'),
    '&:hover': {
      backgroundColor: (props) => props.background,
      opacity: 0.9,
    },
    '&.Mui-disabled': {
      backgroundColor: (props) => props.background,
      opacity: 0.7,
    },
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
})(Button);

export const StyledText = styled.span`
  line-height: 1;
  display: inline-block;
  margin-left: ${(props) => (props.$loading ? '8px' : '0')};
  color: ${(props) => props.color};
`;
