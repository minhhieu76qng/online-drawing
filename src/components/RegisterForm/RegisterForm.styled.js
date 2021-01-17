import styled from 'styled-components';
import Button from 'components/Shared/Button';
import Input from 'components/Shared/Input';
import { Colors } from 'constants/styles/Colors';

export const StyledRegisterContainer = styled.div`
  min-width: 400px;
  background-color: ${Colors.WHITE};
  border-radius: 0.25rem;
  padding: 16px;
  box-shadow: 0 15px 36px -7px ${Colors.PRIMARY};
`;

export const StyledRegisterLogo = styled.img`
  display: block;
  width: 100px;
  margin: 0 auto 8px;
`;

export const StyledRegisterTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
`;
export const StyledForm = styled.form`
  padding: 0 30px;
`;
export const StyledFormTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const StyledRegisterInput = styled(Input)`
  && {
    margin-bottom: 16px;
  }
`;

export const StyledRegisterButton = styled(Button)`
  && {
    margin-top: 8px;
  }
`;
