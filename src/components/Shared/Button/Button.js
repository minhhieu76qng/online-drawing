import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Colors } from 'constants/styles/Colors';
import { makeStyles } from '@material-ui/core/styles';
import { StyledButton, StyledText } from './Button.styled';

const propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  variant: 'contained',
  color: Colors.WHITE,
  size: 'small',
  fullWidth: true,
  loading: false,
  disabled: false,
  backgroundColor: Colors.ROYAL_BLUE,
  children: null,
};

const useStyle = makeStyles({
  root: {
    color: (props) => props.color,
  },
});

function Button(props) {
  const { loading, disabled, children, backgroundColor, color, ...rest } = props;
  const classes = useStyle({ color });
  return (
    <StyledButton disabled={disabled || loading} background={backgroundColor} {...rest}>
      {loading ? (
        <CircularProgress size={20} className={classes.root} />
      ) : (
        <StyledText color={color} $loading={loading}>
          {children}
        </StyledText>
      )}
    </StyledButton>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
