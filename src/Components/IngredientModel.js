import React from 'react';

export default function IngredientModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999
    }}>
      <div style={{
        width: '95%', maxWidth: 500, background: '#fff',
        borderRadius: 16, padding: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>{dish.name}</h2>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: 18, cursor: 'pointer' }}>✕</button>
        </div>
        <p style={{ color: '#6b7280' }}>{dish.description}</p>
        
        <h3 style={{ marginTop: 16 }}>Ingredients</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {dish.ingredients.map((ing, idx) => (
            <li key={idx} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}>
              {/* Ingredient icon placeholder (replace with actual icons/images) */}
              <img src={`https://source.unsplash.com/40x40/?${ing.name}`} alt={ing.name} style={{ borderRadius: '50%' }} />
              <span><strong>{ing.name}</strong> — {ing.qty}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
