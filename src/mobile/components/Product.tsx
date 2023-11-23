import styled from "styled-components";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { Product } from "@/types/TPorducts";

type Props = {
  item: Product;
};

const ProductComp = ({ item }: Props) => {
  return (
    <Main>
      <div className="img-container">
        <img src={item.image} alt="Logo Image" />
      </div>
      <h5>{item.title}</h5>
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
