import styled from "styled-components";

import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {
  return (
    <Main>
      <div className="img-container">
        <img src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg" />
      </div>
      <div className="input-container">
        <div className="sign-container">
          <h1>Sign In</h1>
          <TextField label="E-Mail Address" variant="outlined" />
          <TextField label="Password" variant="outlined" type="password" />
          <div className="remember-container">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <Button variant="outlined">Sign In</Button>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  .img-container {
    width: 50%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .input-container {
    width: 50%;
    height: 80%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    .sign-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1.2rem;
      width: 60%;
      .MuiFormControl-root {
        width: 100%;
      }
    }

    button {
      padding: 1rem 0rem;
      width: 100%;
    }

    .remember-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
    }
  }
`;

export default LoginPage;
