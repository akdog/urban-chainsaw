//Import Package
import styled from "styled-components";

//Import Components
import HeaderLogin from "../components/HeaderLogin";

const LoginPage = () => {
  return (
    <Main>
      <HeaderLogin />
      <h1>Hallo World</h1>
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

export default LoginPage;
