import React from 'react';
import DishCard from './Dishcard';

export default function DishList({ dishes, selectedIds, onAdd, onRemove, onViewIngredients }) {
  if (!dishes.length) {
    return <div style={{ textAlign: 'center', padding: 20, color: '#6b7280' }}>No dishes found.</div>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px'
    }}>
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selectedIds.includes(dish.id)}
          onAdd={onAdd}
          onRemove={onRemove}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
}
