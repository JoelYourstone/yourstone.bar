import React from 'react';
import styled from 'styled-components';

interface DrinkProps {
  name: string;
  keywords: string[];
  ingredients: string[];
}

const DrinkCard = styled.div`
  display: flex;
  text-align: left;
  width: calc(50% - 20px);
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media print {
    width: calc(50% - 10px) !important;
  }
`;

const DrinkTitle = styled.h2`
  margin: 0 0 10px;
  text-transform: uppercase;
  font-size: 1.7rem;
  line-height: 1.2;
`;

const DrinkIngredients = styled.p`
  margin: 0 0 10px;
  max-width: 250px;
  font-size: 1rem;
  letter-spacing: -0.25px;
`;

const DrinkKeyword = styled.div`
  margin-right: 5px;
  padding: 5px;
`;

const Keywords = styled.div`
  width: 20%;
  flex-shrink: 0;
  font-family: DIN2014-Light;
  font-size: 1rem;
`;

const Drink: React.FC<DrinkProps> = ({ name, keywords, ingredients }) => {
  return (
    <DrinkCard>
      <div>
        <DrinkTitle>{name}</DrinkTitle>
        <DrinkIngredients>{ingredients.join(', ')}</DrinkIngredients>
      </div>
      <Keywords>
        {keywords.map((keyword, index) => (
          <DrinkKeyword key={index}>{keyword}</DrinkKeyword>
        ))}
      </Keywords>
    </DrinkCard>
  );
};

export default Drink;
