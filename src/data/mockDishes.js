export const dishes = [
  {
    id: 1,
    name: "Kadhai Paneer 1",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" }
    ]
  },
  {
    id: 2,
    name: "Chicken Curry",
    description: "Chicken in spicy onion-tomato gravy with aromatic spices.",
    image: "https://placehold.co/300x200/E0C097/422402?text=Chicken+Curry",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Garlic", quantity: "5 cloves" }
    ]
  }
  // 👉 continue adding more mock dishes (Starters, Desserts, Sides)
];
