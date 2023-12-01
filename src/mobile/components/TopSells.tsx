import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

type OverallCategoriesType = {
  id: number;
  type: string;
};

const TopSells = () => {
  const navigate = useNavigate();

  const overallCategories: OverallCategoriesType[] = [
    { id: 1, type: "Electronics" },
    { id: 2, type: "Jewelery" },
    { id: 3, type: "Clothing" },
  ];

  const handleNavigate = (id: number) => {
    navigate("/all");
  };

  return (
    <Main>
      <div className="header-container">
        <h2>Leaders of sells</h2>
        <Link to="/all">View All</Link>
      </div>
      <div className="product-category">
        {overallCategories.map((item) => (
          <div
            className="categorys"
            onClick={() => handleNavigate(item.id)}
            key={item.id}
          >
            <a href="">{item.type}</a>
          </div>
        ))}
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 100%;

  padding: 2rem 0.5rem;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h2 {
      font-weight: 600;
    }
  }

  .product-category {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 1rem;

    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    margin-top: 1rem;

    width: 100%;

    .categorys {
      background: #323232;
      padding: 0.2rem 2rem;
      border-radius: 20px;

      flex: 0 0 auto;

      a {
        color: white;
      }
    }
  }
`;

export default TopSells;
