import styled from "styled-components";

import Searchbar from "./Searchbar";

const Slider = () => {
  type LogoType = {
    id: number;
    src: string;
    alt: string;
  };

  const logos: LogoType[] = [
    {
      id: 1,
      src: "https://dlcdnimgs.asus.com/websites/global/Sno/79183.jpg",
      alt: "Logo Image",
    },

    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxIZ3DUA0hFxUrphE84Y35kfrcyGH4BpznSavNdoCFQ&s",
      alt: "Logo Image",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/TOSHIBA_Logo.png/1200px-TOSHIBA_Logo.png",
      alt: "Logo Image",
    },

    {
      id: 6,
      src: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$",
      alt: "Logo Image",
    },
  ];

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
          {logos.map((item) => (
            <img src={item.src} alt={item.alt} key={item.id} />
          ))}
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
      }
    }
  }
`;

export default Slider;
