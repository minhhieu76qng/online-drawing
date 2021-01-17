import { TextField, withStyles } from '@material-ui/core';

export const StyledInput = withStyles({
  root: {
    height: 40,
    width: '100%',
  },
})(TextField);
