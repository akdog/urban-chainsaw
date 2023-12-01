import { useContext } from "react";
import { ProductContext } from "@/context/ProductStore";

import styled from "styled-components";

import ProductComp from "./Product";
import { useLocation } from "react-router-dom";

type Props = {
  categoryID: number | null;
  setCategoryID: React.Dispatch<React.SetStateAction<number | null>>;
};

const Products = ({ categoryID, setCategoryID }: Props) => {
  const data = useContext(ProductContext);
  const location = useLocation();

  if (location.pathname === "/all") {
    return (
      <MainAll className="products-container">
        {data?.map((item) => (
          <ProductComp key={item.id} item={item} location={location} />
        ))}
      </MainAll>
    );
  }

  return (
    <Main className="products-container">
      {data?.map((item) => (
        <ProductComp key={item.id} item={item} location={location} />
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

const MainAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export default Products;
