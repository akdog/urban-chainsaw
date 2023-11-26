import styled from "styled-components";

import Products from "../components/Products";
import Searchbar from "../components/Searchbar";

const ViewAllPage = () => {
  return (
    <Main>
      <Searchbar />
      <Products />
    </Main>
  );
};

const Main = styled.div``;

export default ViewAllPage;
