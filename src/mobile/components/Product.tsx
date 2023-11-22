import styled from "styled-components";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = () => {
  return (
    <Main>
      <div className="img-container">
        <img
          src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg"
          alt="Logo Image"
        />
      </div>
      <h5>Iphone 14</h5>
      <div className="product-detail">
        <h3>3755$</h3>
        <p>0% 18m</p>
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
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default Product;
