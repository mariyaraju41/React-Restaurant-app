import React from "react";

function DishCard({ dish, isSelected, onToggle, onViewIngredients }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 mb-3 rounded-lg shadow-sm">
      <div className="flex-1 pr-3">
        <h3 className="font-medium text-gray-900">{dish.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{dish.description}</p>
        <button
          onClick={() => onViewIngredients(dish)}
          className="text-orange-500 text-sm mt-1"
        >
          Ingredient
        </button>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-20 h-20 object-cover rounded-lg mb-2"
        />
        <button
          onClick={() => onToggle(dish.id)}
          className={`px-3 py-1 rounded-full text-sm ${
            isSelected ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
        >
          {isSelected ? "Remove" : "Add +"}
        </button>
      </div>
    </div>
  );
}

export default DishCard;
