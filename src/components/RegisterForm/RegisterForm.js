import { useEffect, useState, useRef } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [userName, setUsername] = useState('');
  const inputRef = useRef(null);
  const onRegister = (event) => {
    event.preventDefault();
    setLoading(true);
  };
  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const isValid = (name) => typeof name === 'string' && name.length > 3;
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <StyledRegisterContainer>
      <StyledRegisterLogo src={AppLogo} />
      <StyledRegisterTitle>Register</StyledRegisterTitle>
      <StyledForm onSubmit={onRegister}>
        <StyledFormTitle>Tell us about your name?</StyledFormTitle>
        <StyledRegisterInput
          inputRef={inputRef}
          value={userName}
          onChange={onUsernameChange}
          placeholder="Your name"
        />
        <StyledRegisterButton type="submit" loading={loading} disabled={!isValid(userName)}>
          Submit
        </StyledRegisterButton>
      </StyledForm>
    </StyledRegisterContainer>
  );
}

export default RegisterForm;
