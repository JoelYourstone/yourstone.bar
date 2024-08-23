import React from "react";
import Drink from "./Drink";
import { drinks } from "./drinks";
import { styled } from "styled-components";

const DrinkContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Menu: React.FC = () => {
  return (
    <DrinkContainer>
      {drinks.map((drink, index) => (
        <Drink
          key={index}
          name={drink.name}
          keywords={drink.keywords}
          ingredients={drink.ingredients}
        />
      ))}
    </DrinkContainer>
  );
};

export default Menu;
