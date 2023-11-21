import React from "react";

import styled from "styled-components";

import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const Searchbar = () => {
  return (
    <Main>
      <StyledCircleIcon id="catalog-basic" />
      <StyledTextField
        id="filled-start-adornment"
        variant="standard"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </Main>
  );
};

// const Main = styled.div`
//   display: flex;
//   align-items: flex-end;
//   width: 100%;
// `;

// const StyledTextField = styled(TextField)`
//   flex: 8;
// `;

// const StyledCircleIcon = styled(AddCircleOutlinedIcon)`
//   flex: 1;
// `;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  flex: 5;
`;

const StyledCircleIcon = styled(AddCircleOutlinedIcon)`
  flex: 1;
`;

export default Searchbar;
