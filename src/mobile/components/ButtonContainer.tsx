import styled from "styled-components";

import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const ButtonContainer = () => {
  return (
    <StyleButtons>
      <Button variant="outlined">
        <InputAdornment position="start">
          <FcGoogle size={30} />
        </InputAdornment>
        Google
      </Button>
      <Button variant="outlined">
        <InputAdornment position="start">
          <FaApple size={30} />
        </InputAdornment>
        Apple
      </Button>
      <Button variant="outlined">
        <InputAdornment position="start">
          <FaFacebook size={30} />
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
