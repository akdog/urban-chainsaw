import { useNavigate } from "react-router-dom";

import styled from "styled-components";

type Props = {
  category: number;
  setCategory: number;
};

const TopCategory = ({ setCategory, category }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/category");
  };

  return (
    <Main>
      <h1>Top Category</h1>
      <div className="card-container">
        <div className="upper-card">
          <div className="cards" onClick={handleNavigate}>
            <img src="https://previews.123rf.com/images/coolvectorstock/coolvectorstock1808/coolvectorstock180803367/106873408-widescreen-laptop-vector-icon-isolated-on-transparent-background-widescreen-laptop-logo-concept.jpg" />
            <p>Phone & Tablets </p>
          </div>
          <div className="cards">
            <img src="https://previews.123rf.com/images/coolvectorstock/coolvectorstock1808/coolvectorstock180803367/106873408-widescreen-laptop-vector-icon-isolated-on-transparent-background-widescreen-laptop-logo-concept.jpg" />
            <p>TV, audio & video</p>
          </div>
          <div className="cards">
            <img src="https://previews.123rf.com/images/coolvectorstock/coolvectorstock1808/coolvectorstock180803367/106873408-widescreen-laptop-vector-icon-isolated-on-transparent-background-widescreen-laptop-logo-concept.jpg" />
            <p>PC, laptops & tablets</p>
          </div>
        </div>
        <div className="lower-card">
          <div className="cards">
            <img src="https://previews.123rf.com/images/coolvectorstock/coolvectorstock1808/coolvectorstock180803367/106873408-widescreen-laptop-vector-icon-isolated-on-transparent-background-widescreen-laptop-logo-concept.jpg" />
            <p>Dishes </p>
          </div>
          <div className="cards">
            <img src="https://previews.123rf.com/images/coolvectorstock/coolvectorstock1808/coolvectorstock180803367/106873408-widescreen-laptop-vector-icon-isolated-on-transparent-background-widescreen-laptop-logo-concept.jpg" />
            <p>Children`s world </p>
          </div>
          <div className="cards">
            <img src="https://previews.123rf.com/images/coolvectorstock/coolvectorstock1808/coolvectorstock180803367/106873408-widescreen-laptop-vector-icon-isolated-on-transparent-background-widescreen-laptop-logo-concept.jpg" />
            <p>House & garden </p>
          </div>
        </div>
      </div>
    </Main>
  );
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

      padding: 1.5rem 1rem;

      border-radius: 15px;

      img {
        width: 80%;
      }

      p {
        text-align: center;
      }
    }
  }
`;

export default TopCategory;
