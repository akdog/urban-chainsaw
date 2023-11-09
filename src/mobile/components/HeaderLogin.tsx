import styled from "styled-components";

import ButtonContainer from "./ButtonContainer";
import InputContainer from "./InputContainer";

const HeaderLogin = () => {
  return (
    <Main>
      <h1>Hello!👋</h1>
      <ButtonContainer />
      <h5>or</h5>
      <InputContainer />
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100%;

  h5 {
    text-align: center;
    padding: 1rem;
  }
`;

export default HeaderLogin;
