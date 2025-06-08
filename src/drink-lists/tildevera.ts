import type { DrinkType } from './drink';

export const drinks: DrinkType[] = [
  {
    name: 'Mojito - Jordgubb',
    keywords: ['Sweet', 'Fruity', 'Fresh'],
    ingredients: ['Premix mojito', 'Strawberry']
  },
  {
    name: 'Raspberry Licorice',
    keywords: ['Sweet', 'Complex', 'Unique'],
    ingredients: ['Raspberry Liqueur', 'Pernod', 'Agave Nectar', 'Lemon']
  },
  {
    name: 'Puka Punch',
    keywords: ['Tiki', 'Fruity', 'Complex', 'Boozy'],
    ingredients: [
      '3 different rums',
      'Lime',
      'Angostura bitters',
      'Falernum',
      'Passion fruit syrup',
      'Sugar',
      'Orange',
      'Pineapple'
    ]
  },
  {
    name: 'Gin Hass',
    keywords: ['Sweet', 'Fruity', 'Refreshing'],
    ingredients: ['Gin', 'Mango syrup', 'Schweppes Russian', 'Lime']
  },
  {
    name: 'Red Russian',
    keywords: ['Sweet', 'Fruity', 'Refreshing'],
    ingredients: ['Gin', 'Crème de Cassis', 'Lemon', 'Schweppes Russian']
  },
  {
    name: 'Soda pop',
    keywords: ['Candy', 'Sour', 'More Sour'],
    ingredients: ['Apple Sourz', 'Blue Curaçao', 'Lime']
  },
  {
    name: 'Old Fashioned',
    keywords: ['Strong', 'Classic', 'Boozy'],
    ingredients: ['Bourbon', 'Angostura bitters', 'Orange', 'Sugar']
  },
  {
    name: 'Gin & Tonic',
    keywords: ['Classic', 'Refreshing', 'Simple'],
    ingredients: ['Gin', 'Tonic water']
  }
];
