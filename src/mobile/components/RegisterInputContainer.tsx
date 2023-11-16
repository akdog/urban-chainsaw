import styled from "styled-components";

import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";

const RegisterInputContainer = () => {
  return (
    <Main>
      <div className="inputs-container">
        <TextField label="Name" variant="standard" />
        <TextField label="Surname" variant="standard" />
        <TextField label="E-mail" variant="standard" />
        <div className="password-container">
          <TextField
            label="Password"
            variant="standard"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
          />
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

export default RegisterInputContainer;
