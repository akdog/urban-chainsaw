import { useLocation } from "react-router-dom";

import styled from "styled-components";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Searchbar = () => {
  const location = useLocation();

  if (location.pathname === "/category" || "/all") {
    return (
      <MainCategory>
        <StyledFrontIcon id="catalog-basic" />
        <div className="icon-container">
          <SearchOutlinedIcon />
          <StyledInput type="text" placeholder="Search" />
        </div>
        <ShoppingCartOutlinedIcon id="shop-icon" />
      </MainCategory>
    );
  }
  return (
    <Main>
      <StyledFrontIcon id="catalog-basic" />
      <div className="icon-container">
        <SearchOutlinedIcon />
        <StyledInput type="text" placeholder="Search" />
      </div>
    </Main>
  );
};

const MainCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0rem;

  background: white;

  position: sticky;
  top: 0;

  #shop-icon {
    margin-right: 1rem;
  }

  .icon-container {
    position: relative;
    flex: 5;

    display: flex;
    align-items: center;

    svg {
      position: absolute;
    }
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: white;

  .icon-container {
    position: relative;
    flex: 5;

    display: flex;
    align-items: center;

    svg {
      position: absolute;
    }
  }
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  text-indent: 1.5rem;
  font-size: 1rem;
`;

const StyledFrontIcon = styled(StorefrontOutlinedIcon)`
  flex: 1;
`;

export default Searchbar;
