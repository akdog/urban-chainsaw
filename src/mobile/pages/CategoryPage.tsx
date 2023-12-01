import { useState } from "react";

import styled from "styled-components";

import Searchbar from "../components/Searchbar";
import BasketHeader from "../components/BasketHeader";
import TopSells from "../components/TopSells";
import Products from "../components/Products";

const CategoryPage = () => {
  return (
    <Main>
      <Searchbar />
      <BasketHeader />
      <TopSells />
      <Products />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export default CategoryPage;
