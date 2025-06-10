import Drink from './Drink';
import { styled } from 'styled-components';
import { drinks } from './drink-lists/tildevera';

const DrinkContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0 10px;
  margin-top: 0px;
`;

function TildeVera() {
  return (
    <DrinkContainer>
      {drinks.map((drink, index) => (
        <Drink key={index} name={drink.name} keywords={drink.keywords} ingredients={drink.ingredients} />
      ))}
    </DrinkContainer>
  );
}

export default TildeVera;
