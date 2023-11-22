import styled from "styled-components";

import Product from "./Product";
const Products = () => {
  return (
    <Main>
      <Product />
      <Product />
      <Product />
      <Product />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0.35rem;
  overflow-x: auto;

  width: 100%;
`;

export default Products;
