import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
};

const defaultProps = {
  variant: 'contained',
  color: 'primary',
};

function Button(props) {
  return <StyledButton {...props} />;
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
