import AppLogo from 'assets/images/logo-with-name.png';
import {
  StyledRegisterLogo,
  StyledRegisterContainer,
  StyledRegisterTitle,
  StyledForm,
  StyledFormTitle,
  StyledRegisterInput,
  StyledRegisterButton,
} from './RegisterForm.styled';

function RegisterForm() {
  return (
    <StyledRegisterContainer>
      <StyledRegisterLogo src={AppLogo} />
      <StyledRegisterTitle>Register</StyledRegisterTitle>
      <StyledForm>
        <StyledFormTitle>Tell us about your name?</StyledFormTitle>
        <StyledRegisterInput placeholder="Your name" />
        <StyledRegisterButton>Submit</StyledRegisterButton>
      </StyledForm>
    </StyledRegisterContainer>
  );
}

export default RegisterForm;
