import React from 'react';
import './Dishcard.css';

export default function DishCard({ dish, isSelected, onAdd, onRemove, onViewIngredients }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} className="dish-image" />
      <div className="dish-body">
        <div className="dish-title">{dish.name}</div>
        <div className="dish-desc">{dish.description}</div>
        <div className="dish-actions">
          <button className="ingredient-btn" onClick={() => onViewIngredients(dish)}>
            Ingredients
          </button>
          {!isSelected ? (
            <button className="add-btn" onClick={() => onAdd(dish.id)}>Add +</button>
          ) : (
            <button className="remove-btn" onClick={() => onRemove(dish.id)}>Remove</button>
          )}
        </div>
      </div>
    </div>
  );
}
