import styled from "styled-components";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <Main>
      <Nav>
        <div className="logo-container">
          <div className="image-container">
            <img src={logo} alt="Image of Logo" />
          </div>
          <h3>ChopShop</h3>
        </div>
        <div className="icons-container">
          <LanguageOutlinedIcon fontSize="medium" />
          <ShoppingCartOutlinedIcon fontSize="medium" />
          <Person2OutlinedIcon fontSize="medium" />
        </div>
      </Nav>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.4rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-container {
    display: flex;
    align-items: center;
    .image-container {
      width: 20%;
      img {
        width: 100%;
      }
    }
  }
  .icons-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default Navbar;
