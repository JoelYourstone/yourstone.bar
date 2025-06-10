import type { DrinkType } from './drink';

export const drinks: DrinkType[] = [
  {
    name: 'Mojito',
    keywords: ['Build', 'Cubes', '20-30cl'],
    ingredients: ['3cl preblend', '3cl rum', 'Top w. splash soda', 'Garnish strawberry, mint & straw']
  },
  {
    name: 'Raspberry Licorice',
    keywords: ['Shaker 1', 'Cubes', '15-25cl'],
    ingredients: ['4cl Chambord', '1 tsp Pernod', '1 sqz Agave', '2cl Lemon']
  },
  {
    name: 'Puka Punch',
    keywords: ['Shaker 2', 'Crushed', '30-50cl'],
    ingredients: ['6cl rum blend', '6cl fresh blend', 'Garnish mint & straw']
  },
  {
    name: 'Gin Hass',
    keywords: ['Shaker 3', 'Cubes', '20-30cl'],
    ingredients: ['6cl gin', '4.5cl Mango', '2.25cl Lime', 'Top Schweppes Red (4.5cl)']
  },
  {
    name: 'Crimson Cooler',
    keywords: ['Shaker 4', 'Cubes', '25-50cl'],
    ingredients: ['4cl gin', '2cl Cassis', '2cl Lemon', 'Top Schweppes Red (8cl)']
  },
  {
    name: 'Soda pop',
    keywords: ['Shaker 5', 'Cubes', '20-30cl'],
    ingredients: ['7cl preblend', '3cl Lemon', 'Top Sprite']
  },
  {
    name: 'Old Fashioned',
    keywords: ['Stir', '"Rocks""', '15-30cl'],
    ingredients: ['5cl preblend', 'Garnish orange peel']
  },
  {
    name: 'Venetian Negroni',
    keywords: ['Stir', '"Rocks"', '15-30cl'],
    ingredients: ['6cl preblend', 'Garnish orange peel']
  },
  {
    name: 'Gin & Tonic',
    keywords: ['Build', 'Cubes', '50cl'],
    ingredients: ['4-6cl gin', '20cl Tonic water', 'Garnish lemon slice']
  },
  {
    name: '<NAME>',
    keywords: ['<METHOD>', '<ICE>', '<GLASS>'],
    ingredients: ['<INGREDIENTS>']
  }
];
