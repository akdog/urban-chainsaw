import { ProductContext } from "@/context/ProductStore";
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import { truncateTitle } from "@/hooks/truncateTitle";

import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

const SingleProduct = () => {
  const [isBasket, setIsBasket] = useState<boolean>(false);

  const data = useContext(ProductContext);

  const { id } = useParams();

  if (id === undefined) {
    return console.error("Id is not found");
  }

  const convToInt = parseFloat(id);
  const result = data?.find((item) => item.id === convToInt);

  const handleBasket = () => {
    setIsBasket(!isBasket);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/all");
  };

  return (
    <Main>
      <div className="back-container" onClick={handleNavigate}>
        <KeyboardDoubleArrowLeftIcon fontSize="large" />
      </div>
      <div className="img-container">
        <img src={result?.image} />
      </div>
      <h3>{result?.title}</h3>
      <div className="price-container">
        <h1>{result?.price}$</h1>
        <h1>{result?.rating.rate}</h1>
      </div>
      <div className="button-container">
        <Button variant="contained" onClick={handleBasket}>
          <InputAdornment position="start">
            {isBasket ? <DoneAllIcon /> : <ShoppingCartIcon />}
          </InputAdornment>
          {isBasket ? "In Basket" : "Add to cart"}
        </Button>
      </div>
      <div className="icon-container">
        <FaBalanceScale size={25} />
        <FaRegHeart size={25} />
        <FaShare size={25} />
      </div>
      <div className="description-container">
        <h4>{result?.description}</h4>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .back-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    padding: 1rem;
  }

  .img-container {
    width: 80%;
    img {
      width: 100%;
    }
  }

  h3 {
    padding: 1rem;
  }

  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80%;
    margin-top: 1rem;
  }

  .button-container {
    margin-top: 2rem;

    button {
      padding: 1rem 6rem;
      border-radius: 10px;
    }
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    svg {
      flex: 1;
      display: flex;
      justify-content: center;

      margin-top: 1.5rem;
    }
  }

  .description-container {
    text-align: center;

    margin-top: 2rem;
  }
`;

export default SingleProduct;
