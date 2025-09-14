export const DISHES = [
  // STARTERS
  {
    id: 's1',
    name: 'Paneer Pakora',
    mealType: 'STARTER',
    type: 'VEG',
    description: 'Crispy paneer fritters served hot.',
    image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2025/03/paneer-pakoda-1.jpg',
    ingredients: [
      { name: 'Paneer', qty: '200g' },
      { name: 'Besan', qty: '100g' },
      { name: 'Chilli powder', qty: '1 tsp' },
    ],
  },
  {
    id: 's2',
    name: 'Chicken 65',
    mealType: 'STARTER',
    type: 'NON-VEG',
    description: 'Spicy deep fried chicken.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgH9WKv5a5sJCjy2FsEjXcXgqrng67FW9GpA&s',
    ingredients: [
      { name: 'Chicken', qty: '250g' },
      { name: 'Cornflour', qty: '2 tbsp' },
      { name: 'Ginger garlic paste', qty: '1 tbsp' },
    ],
  },
  {
    id: 's3',
    name: 'Samosa',
    mealType: 'STARTER',
    type: 'VEG',
    description: 'Fried pastry with spicy potato filling.',
    image: 'https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_2103381338.jpg',
    ingredients: [
      { name: 'Potato', qty: '200g' },
      { name: 'Flour', qty: '150g' },
      { name: 'Spices', qty: 'to taste' },
    ],
  },

  // MAIN COURSE
  {
    id: 'm1',
    name: 'Kadhai Paneer',
    mealType: 'MAIN COURSE',
    type: 'VEG',
    description: 'Paneer cubes in spicy onion gravy with capsicum.',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg',
    ingredients: [
      { name: 'Paneer', qty: '300g' },
      { name: 'Onion', qty: '2 medium' },
      { name: 'Capsicum', qty: '1 large' },
    ],
  },
  {
    id: 'm2',
    name: 'Dal Makhani',
    mealType: 'MAIN COURSE',
    type: 'VEG',
    description: 'Slow cooked black lentils with butter.',
    image: 'https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg',
    ingredients: [
      { name: 'Whole black lentils', qty: '250g' },
      { name: 'Butter', qty: '50g' },
      { name: 'Cream', qty: '30ml' },
    ],
  },
  {
    id: 'm3',
    name: 'Butter Chicken',
    mealType: 'MAIN COURSE',
    type: 'NON-VEG',
    description: 'Creamy tomato-based chicken curry.',
    image: 'https://theyummydelights.com/wp-content/uploads/2018/07/Indian-butter-chicken-recipe.jpg',
    ingredients: [
      { name: 'Chicken', qty: '400g' },
      { name: 'Tomato puree', qty: '200g' },
      { name: 'Butter', qty: '40g' },
    ],
  },

  // SIDES
  {
    id: 'sd1',
    name: 'Butter Naan',
    mealType: 'SIDES',
    type: 'VEG',
    description: 'Soft buttered naan.',
    image: 'https://foodess.com/wp-content/uploads/2023/02/Butter-Naan-3-500x500.jpg',
    ingredients: [
      { name: 'Flour', qty: '300g' },
      { name: 'Yeast', qty: '1 tsp' },
    ],
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Gulab Jamun',
    mealType: 'DESSERT',
    type: 'VEG',
    description: 'Soft milk-solid balls soaked in cardamom sugar syrup.',
    image: 'https://static.toiimg.com/thumb/63799510.cms?width=1200&height=900',
    ingredients: [
      { name: 'Khoya', qty: '250g' },
      { name: 'Maida', qty: '2 tbsp' },
      { name: 'Sugar syrup', qty: '200ml' },
    ],
  },
  {
    id: 'd2',
    name: 'Rasgulla',
    mealType: 'DESSERT',
    type: 'VEG',
    description: 'Spongy paneer balls in sugar syrup.',
    image: 'https://thumbs.dreamstime.com/b/rasgulla-indian-dessert-rasgulla-homemade-cottage-cheese-dumplings-indian-dessert-172766628.jpg',
    ingredients: [
      { name: 'Milk', qty: '1L' },
      { name: 'Lemon juice', qty: '1 tbsp' },
      { name: 'Sugar', qty: '300g' },
    ],
  },
  {
    id: 'd3',
    name: 'Kheer',
    mealType: 'DESSERT',
    type: 'VEG',
    description: 'Creamy rice pudding with cardamom and nuts.',
    image: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/04/rice-kheer.jpg',
    ingredients: [
      { name: 'Rice', qty: '50g' },
      { name: 'Milk', qty: '800ml' },
      { name: 'Sugar', qty: '80g' },
    ],
  }
];
