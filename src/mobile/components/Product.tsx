import styled from "styled-components";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { Product } from "@/types/TPorducts";

import { Location } from "react-router-dom";

type Props = {
  item: Product;
  location: Location<any>;
  titleLength?: number;
};

const truncateTitle = (title: string, maxLength: number): string => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }

  return title;
};

const ProductComp = ({ item, location, titleLength = 30 }: Props) => {
  const truncatedTitle = truncateTitle(item.title, titleLength);

  if (location.pathname === "/all") {
    return (
      <MainAll>
        <div className="img-container">
          <img src={item.image} alt="Logo Image" />
        </div>
        <h5>{truncatedTitle}</h5>
        <div className="product-detail">
          <h3>{item.price}$</h3>
          <p>{item.rating.count}</p>
        </div>
        <div className="add-cart-container">
          <FavoriteBorderOutlinedIcon />
          <button>Add To Cart</button>
        </div>
      </MainAll>
    );
  }

  return (
    <Main>
      <div className="img-container">
        <img src={item.image} alt="Logo Image" />
      </div>
      <h5>{truncatedTitle}</h5>
      <div className="product-detail">
        <h3>{item.price}$</h3>
        <p>{item.rating.count}</p>
      </div>
      <div className="add-cart-container">
        <FavoriteBorderOutlinedIcon />
        <button>Add To Cart</button>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  height: 45vh;

  flex: 0 0 auto;

  width: 50%;
  height: 55vh;

  h5 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    width: 100%;
  }

  .product-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    width: 100%;
    height: 100%;

    padding: 0rem 0.25rem;
  }

  .add-cart-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex: 1;

    width: 100%;
    height: 100%;

    padding: 0rem 0.6rem;

    button {
      padding: 0.5rem 1.3rem;
      border: none;
      border-radius: 5px;
      background: #dedddd;
    }
  }
  .img-container {
    width: 100%;
    height: 60%;

    padding: 1.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const MainAll = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  height: 45vh;

  flex: 0 0 auto;

  width: 50%;

  padding: 1rem;
  height: 55vh;

  .product-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    width: 100%;
    height: 100%;

    padding: 0rem 0.25rem;
  }

  .add-cart-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex: 1;

    width: 100%;
    height: 100%;

    padding: 0rem 0.2rem;

    button {
      padding: 0.5rem 1.3rem;
      border: none;
      background: gray;
      border-radius: 5px;
    }
  }
  .img-container {
    width: 100%;
    height: 60%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default ProductComp;
