import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import TopCategory from "../components/TopCategory";

type Props = {
  setCategoryID: React.Dispatch<React.SetStateAction<number | null>>;
};

const MainPage = ({ setCategoryID }: Props) => {
  return (
    <>
      <Navbar />
      <Slider />
      <TopCategory setCategoryID={setCategoryID} />
    </>
  );
};

export default MainPage;
