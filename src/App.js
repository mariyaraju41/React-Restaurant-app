import React, { useState } from "react";
import { dishes } from "./data/mockDishes";
import Filters from "./Components/Filters";
import DishList from "./Components/DishList";
import IngredientModal from "./Components/IngredientModel";
import FooterBar from "./Components/FooterBar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegFilter, setVegFilter] = useState("");
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [currentDish, setCurrentDish] = useState(null);

  // filtering
  const filteredDishes = dishes.filter((dish) => {
    const categoryMatch = dish.mealType === selectedCategory;
    const searchMatch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch = vegFilter ? dish.type === vegFilter : true;
    return categoryMatch && searchMatch && typeMatch;
  });

  // toggle add/remove
  const toggleDish = (id) => {
    setSelectedDishes((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-4 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🍴 Party Menu Selection</h1>

      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegFilter={vegFilter}
        setVegFilter={setVegFilter}
      />

      <DishList
        dishes={filteredDishes}
        selectedDishes={selectedDishes}
        onToggle={toggleDish}
        onViewIngredients={setCurrentDish}
      />

      {currentDish && (
        <IngredientModal
          dish={currentDish}
          onClose={() => setCurrentDish(null)}
          onToggle={toggleDish}
          isSelected={selectedDishes.includes(currentDish.id)}
        />
      )}

      <FooterBar totalSelected={selectedDishes.length} />
    </div>
  );
}

export default App;
