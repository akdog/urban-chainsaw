import { useContext } from "react";
import { ProductContext } from "@/context/ProductStore";

import styled from "styled-components";

import ProductComp from "./Product";
const Products = () => {
  const data = useContext(ProductContext);

  return (
    <Main>
      {data?.map((item) => (
        <ProductComp key={item.id} item={item} />
      ))}
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
