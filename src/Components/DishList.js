import React from "react";
import DishCard from "./Dishcard";

function DishList({ dishes, selectedDishes, onToggle, onViewIngredients }) {
  return (
    <div>
      {dishes.length > 0 ? (
        dishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            isSelected={selectedDishes.includes(dish.id)}
            onToggle={onToggle}
            onViewIngredients={onViewIngredients}
          />
        ))
      ) : (
        <p className="text-gray-500">No dishes found</p>
      )}
    </div>
  );
}

export default DishList;
