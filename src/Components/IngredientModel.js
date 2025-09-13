import React from "react";

function IngredientModal({ dish, onClose, onToggle, isSelected }) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 w-80 relative">
        <h2 className="text-lg font-semibold mb-2">{dish.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{dish.description}</p>
        <h4 className="font-medium mb-2">Ingredients</h4>
        <ul className="mb-4 list-disc list-inside text-sm">
          {dish.ingredients.map((ing, idx) => (
            <li key={idx}>
              {ing.name} - {ing.quantity}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onToggle(dish.id)}
          className={`w-full px-4 py-2 rounded-lg ${
            isSelected ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
        >
          {isSelected ? "Remove" : "Add +"}
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default IngredientModal;
