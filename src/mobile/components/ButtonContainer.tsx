import React from "react";

import styled from "styled-components";

import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

const ButtonContainer = () => {
  return (
    <StyleButtons>
      <Button variant="outlined">
        <InputAdornment position="start">
          <GoogleIcon />
        </InputAdornment>
        Google
      </Button>
      <Button variant="outlined">
        <InputAdornment position="start">
          <AppleIcon />
        </InputAdornment>
        Apple
      </Button>
      <Button variant="outlined">
        <InputAdornment position="start">
          <FacebookIcon />
        </InputAdornment>
        Facebook
      </Button>
    </StyleButtons>
  );
};

const StyleButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2.5rem;

  width: 100%;
  height: 100%;

  button {
    width: 100%;
    padding: 0.5rem 0rem;
  }
`;

export default ButtonContainer;
