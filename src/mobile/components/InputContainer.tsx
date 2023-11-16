import { useState } from "react";

import styled from "styled-components";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

const InputContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Main>
      <div className="inputs-container">
        <TextField label="E-mail" variant="standard" />
        <div className="password-container">
          <TextField
            label="Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div className="checkbox-container">
            <div className="single-checkbox">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <p>Forgot your Password?</p>
          </div>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .inputs-container {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .MuiFormControl-root {
      width: 100%;
    }
  }

  .checkbox-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 0rem;

    .single-checkbox {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export default InputContainer;
