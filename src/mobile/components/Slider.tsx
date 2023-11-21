import React from "react";

import styled from "styled-components";

import Searchbar from "./Searchbar";

const Slider = () => {
  return (
    <Main>
      <Searchbar />
      <div className="image-container">
        <img
          src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg"
          alt="Product Image"
        />
      </div>
      <div className="slider-container">
        <div className="logo-container">
          <img
            src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg"
            alt="Logo Image"
          />
        </div>
        <div className="logo-container">
          <img
            src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg"
            alt="Logo Image"
          />
        </div>
        <div className="logo-container">
          <img
            src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg"
            alt="Logo Image"
          />
        </div>
        <div className="logo-container">
          <img
            src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg"
            alt="Logo Image"
          />
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;

  .image-container {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .slider-container {
    width: 100%;

    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    .logo-container {
      width: 30%;
      display: inline-block;

      img {
        width: 100%;
        padding: 0.2rem;
      }
    }
  }
`;

export default Slider;
