import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

export const StyledButton = withStyles({
  root: {
    width: '100%',
    minHeight: 40,
  },
})(Button);
