import { useContext } from "react";
import styled from "styled-components";

import { ProductContext } from "@/context/ProductStore";
import { Product } from "@/types/TPorducts";

const BasketHeader = () => {
  const data: Product[] | undefined = useContext(ProductContext);

  if (data === undefined || data[3] === undefined) {
    return <div>Loading...</div>;
  }

  if (data) {
    return (
      <Main>
        <div className="img-container">
          <img src={data[3].image} alt="Logo Image" />
        </div>
        <div className="text-container">
          <h1>{data[3].title}</h1>
          <h3>{data[3].price}$</h3>
          <button>In the Basket</button>
        </div>
      </Main>
    );
  }
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20vh;

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;

    width: 100%;
    height: 100%;

    padding: 0rem 0.6rem;

    button {
      width: 80%;
      padding: 0.3rem 0rem;
      border-radius: 5px;

      border: none;
      background: #bfbfbf;
    }
  }
`;

export default BasketHeader;
