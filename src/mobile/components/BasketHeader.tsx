import React from "react";
import styled from "styled-components";

const BasketHeader = () => {
  return (
    <Main>
      <div className="img-container">
        <img
          src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg"
          alt="Logo Image"
        />
      </div>
      <div className="text-container">
        <h1>Iphone 9</h1>
        <h3>20$</h3>
        <button>In the Basket</button>
      </div>
    </Main>
  );
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
