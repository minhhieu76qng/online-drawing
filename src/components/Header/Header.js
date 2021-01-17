import { Link } from 'react-router-dom';
import AppLogo from 'assets/images/logo.png';
import { StyledAppLogo, StyledHeaderContainer } from './Header.styled';

function Header() {
  return (
    <StyledHeaderContainer>
      <Link to="/rooms">
        <StyledAppLogo src={AppLogo} />
      </Link>
    </StyledHeaderContainer>
  );
}

export default Header;
