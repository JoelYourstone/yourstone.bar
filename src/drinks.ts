export interface Drink {
  name: string;
  keywords: string[];
  ingredients: string[];
}

export const drinks: Drink[] = [
  {
    name: "Old Fashioned",
    keywords: ["Boozy", "Bitter", "Classic"],
    ingredients: ["Bourbon", "Bitters", "Sugar", "Orange Peel"],
  },
  // More drinks...
];
