import { useNavigate } from "react-router-dom";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CoffeeIcon from "@mui/icons-material/Coffee";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import DeckIcon from "@mui/icons-material/Deck";
import styled from "styled-components";
import { useProductSource } from "@/hooks/useProductSource";

type CategoryItem = {
  id: string;
  category: number;
};

const categories: CategoryItem[] = [
  { id: "phone-tablets", category: 1 },
  { id: "tv-audio-video", category: 2 },
  { id: "laptops-tablets", category: 3 },
  { id: "dishes", category: 4 },
  { id: "childrens-world", category: 5 },
  { id: "house-garden", category: 6 },
];

const TopCategory = () => {
  const navigate = useNavigate();

  const { setCategoryID } = useProductSource();

  const handleNavigate = (category: number) => {
    setCategoryID(category);
    console.log("Selected Category ID:", category);
    navigate("/category");
  };

  return (
    <Main>
      <h1>Top Category</h1>
      <div className="card-container">
        <div className="upper-card">
          {categories.slice(0, 3).map((item) => (
            <div
              className="cards"
              key={item.id}
              onClick={() => handleNavigate(item.category)}
            >
              {getIcon(item.id)}
              <p>{getCategoryName(item.id)}</p>
            </div>
          ))}
        </div>
        <div className="lower-card">
          {categories.slice(3).map((item) => (
            <div
              className="cards"
              key={item.id}
              onClick={() => handleNavigate(item.category)}
              id={item.id === "dishes" ? "dish-id" : ""}
            >
              {getIcon(item.id)}
              <p>{getCategoryName(item.id)}</p>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

const getIcon = (id: string) => {
  switch (id) {
    case "phone-tablets":
      return <PhoneIphoneIcon />;
    case "tv-audio-video":
      return <LiveTvIcon />;
    case "laptops-tablets":
      return <LaptopIcon />;
    case "dishes":
      return <CoffeeIcon />;
    case "childrens-world":
      return <ChildFriendlyIcon />;
    case "house-garden":
      return <DeckIcon />;
    default:
      return null;
  }
};

const getCategoryName = (id: string) => {
  return id.replace(/-/g, " ");
};

const Main = styled.div`
  margin-top: 1.5rem;
  padding: 0rem 1rem;

  width: 100%;
  height: 45vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
    height: 100%;

    .upper-card {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }

    .lower-card {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }

    .cards {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;

      padding: 1.5rem 1rem;

      border-radius: 15px;

      width: 100%;

      border: 1px solid gray;

      svg {
        width: 80%;
      }

      p {
        text-align: center;
      }

      &[id="dish-id"] {
        padding: 2rem 1rem;
      }
    }
  }
`;

export default TopCategory;
