import PropTypes from 'prop-types';
import { StyledInput } from './Input.styled';

const propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  variant: 'outlined',
  size: 'small',
};

function Input(props) {
  console.log('🚀 ~ file: Input.js ~ line 13 ~ Input ~ props', props);
  return <StyledInput {...props} />;
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
