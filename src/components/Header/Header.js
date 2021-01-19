import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import AppLogo from 'assets/images/logo.png';
import { SHAPE_TYPE } from 'constants/shapes';
import { Colors } from 'constants/styles/Colors';
import {
  StyledAppLogo,
  StyledHeaderContainer,
  StyledToolbar,
  StyledTool,
  StyledToolTitle,
  MaterialSelect,
  MaterialOutlineInput,
} from './Header.styled';

const propTypes = {
  shapeType: PropTypes.string,
  shapeColor: PropTypes.string,
  onShapeChange: PropTypes.func,
  onColorChange: PropTypes.func,
};
const defaultProps = {
  shapeType: SHAPE_TYPE.RECTANGLE,
  shapeColor: Colors.PRIMARY,
  onShapeChange: () => {},
  onColorChange: () => {},
};
function Header({ shapeType, shapeColor, onShapeChange, onColorChange }) {
  return (
    <StyledHeaderContainer>
      <Link to="/rooms">
        <StyledAppLogo src={AppLogo} />
      </Link>
      <StyledToolbar>
        <StyledTool>
          <StyledToolTitle>Shapes</StyledToolTitle>
          <FormControl focused={false} variant="outlined">
            <MaterialSelect
              value={shapeType}
              onChange={(event) => onShapeChange(event.target.value)}
              onClick={(event) => event.stopPropagation()}
            >
              <MenuItem value={SHAPE_TYPE.RECTANGLE}>Rectangle</MenuItem>
              <MenuItem value={SHAPE_TYPE.TRIANGLE}>Triangle</MenuItem>
              <MenuItem value={SHAPE_TYPE.CIRCLE}>Circle</MenuItem>
            </MaterialSelect>
          </FormControl>
        </StyledTool>
        <StyledTool>
          <StyledToolTitle>Colors</StyledToolTitle>
          <MaterialOutlineInput
            type="color"
            value={shapeColor}
            onChange={(event) => onColorChange(event.target.value)}
            onClick={(event) => event.stopPropagation()}
          />
        </StyledTool>
      </StyledToolbar>
    </StyledHeaderContainer>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
