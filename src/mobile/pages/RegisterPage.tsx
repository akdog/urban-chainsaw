//Import Package
import styled from "styled-components";

//Import Components
import LoginContainer from "../components/LoginContainer";
import ButtonContainer from "../components/ButtonContainer";
import RegisterInputContainer from "../components/RegisterInputContainer";

const RegisterPage = () => {
  return (
    <Main>
      <Header>
        <h1>Hello!👋</h1>
        <ButtonContainer />
        <h5>or</h5>
        <RegisterInputContainer />
      </Header>
      <LoginContainer />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;

  h5 {
    text-align: center;
    padding: 1rem;
  }
`;

export default RegisterPage;
