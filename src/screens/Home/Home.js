import RegisterForm from 'components/RegisterForm';
import { StyledHomeContainer } from './Home.styled';

function Home() {
  console.log('render');
  return (
    <StyledHomeContainer>
      <RegisterForm />
    </StyledHomeContainer>
  );
}

export default Home;
