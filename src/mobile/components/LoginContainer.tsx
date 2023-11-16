import styled from "styled-components";

import Button from "@mui/material/Button";

import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentURL = location.pathname;

  const succesLink = () => {
    navigate("/success-page");
  };

  const handleMain = () => {
    navigate("/main");
  };

  if (currentURL === "/register") {
    return (
      <Main>
        <Button variant="contained" onClick={succesLink}>
          Register
        </Button>
        <h5>
          Have an Account
          <span>
            <Link to="/">Login</Link>
          </span>
        </h5>
      </Main>
    );
  }

  return (
    <Main>
      <Button variant="contained" onClick={handleMain}>
        Login
      </Button>
      <h5>
        No Account?
        <span>
          <Link to="/register">Register</Link>
        </span>
      </h5>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  padding: 3rem 0rem;

  width: 100%;

  h5 {
    color: grey;
    span {
      color: black;
      font-weight: 600;
      margin-left: 0.5rem;
    }
  }

  button {
    width: 100%;
    padding: 0.8rem 0rem;
    border-radius: 10px;
  }
`;

export default LoginContainer;
