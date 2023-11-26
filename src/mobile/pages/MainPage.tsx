import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import TopCategory from "../components/TopCategory";

type Props = {
  category: number;
  setCategory: number;
};

const MainPage = ({ setCategory, category }: Props) => {
  return (
    <>
      <Navbar />
      <Slider />
      <TopCategory setCategory={setCategory} category={category} />
    </>
  );
};

export default MainPage;
