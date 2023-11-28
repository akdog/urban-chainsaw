import styled from "styled-components";

import Searchbar from "../components/Searchbar";
import BasketHeader from "../components/BasketHeader";
import TopSells from "../components/TopSells";
import Products from "../components/Products";

type Props = {
  setCategoryID: React.Dispatch<React.SetStateAction<number | null>>;
};

const CategoryPage = ({ setCategoryID }: Props) => {
  return (
    <Main>
      <Searchbar />
      <BasketHeader />
      <TopSells setCategoryID={setCategoryID} />
      <Products />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export default CategoryPage;
