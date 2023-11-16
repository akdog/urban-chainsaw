import styled from "styled-components";

import { colors } from "@/enums/Colors";

import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <Main>
      <div className="done-container">
        <DoneIcon fontSize="large" />
      </div>
      <h3>You are registered</h3>
      <h5>
        An email has been sent to you with a link to confirm your password.
        Please confirm your email address
      </h5>
      <Link to="/">Close Page</Link>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2rem;
  text-align: center;

  .done-container {
    background: ${colors.green};
    color: white;

    width: 25%;
    height: 10%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 60px;
  }

  width: 100vw;
  height: 100vh;
`;

export default SuccessPage;
