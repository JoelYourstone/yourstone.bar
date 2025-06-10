import Drink from './Drink';
import { styled } from 'styled-components';
import { drinks } from './drink-lists/tildevera';
import { drinks as drinkInstructions } from './drink-lists/tildevera-instructions';

const DrinkContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0 20px;
`;

function TildeVera(props: { instructions?: boolean }) {
  const { instructions = false } = props;
  return (
    <DrinkContainer>
      {(instructions ? drinkInstructions : drinks).map((drink, index) => (
        <Drink
          key={index}
          name={drink.name}
          keywords={drink.keywords}
          ingredients={drink.ingredients}
          isInstructions={instructions}
        />
      ))}
    </DrinkContainer>
  );
}

export default TildeVera;
