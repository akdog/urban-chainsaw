import styled from "styled-components";

import Products from "../components/Products";
import Searchbar from "../components/Searchbar";

type Props = {
  categoryID: number | null;
  setCategoryID: React.Dispatch<React.SetStateAction<number | null>>;
};

const ViewAllPage = ({ categoryID, setCategoryID }: Props) => {
  return (
    <Main>
      <Searchbar />
      <Products categoryID={categoryID} setCategoryID={setCategoryID} />
    </Main>
  );
};

const Main = styled.div``;

export default ViewAllPage;
