import Drink from "./Drink";
import { styled } from "styled-components";
import { DrinkType } from "./drink-lists/drink";

const DrinkContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0 20px;
`;

function Menu(props: { drinks: DrinkType[] }) {
  return (
    <DrinkContainer>
      {props.drinks.map((drink, index) => (
        <Drink
          key={index}
          name={drink.name}
          keywords={drink.keywords}
          ingredients={drink.ingredients}
        />
      ))}
    </DrinkContainer>
  );
}

export default Menu;
