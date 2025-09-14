import React from 'react';

export default function Filters({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  nonVegOnly,
  onToggleVeg,
  onToggleNonVeg,
  counts
}) {
  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search dish for your party..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Category Tabs */}
      <div className="tabs">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onCategoryChange(c)}
            className={`tab ${activeCategory === c ? 'active' : ''}`}
          >
            {c} ({counts[c] || 0})
          </button>
        ))}
      </div>

      {/* Veg/Non-Veg Filters */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <button
          onClick={onToggleVeg}
          style={{
            padding: '8px 14px',
            borderRadius: 8,
            border: vegOnly ? '2px solid #10b981' : '1px solid #e5e7eb',
            background: vegOnly ? '#d1fae5' : '#fff',
            cursor: 'pointer'
          }}
        >
          Veg
        </button>
        <button
          onClick={onToggleNonVeg}
          style={{
            padding: '8px 14px',
            borderRadius: 8,
            border: nonVegOnly ? '2px solid #ef4444' : '1px solid #e5e7eb',
            background: nonVegOnly ? '#fee2e2' : '#fff',
            cursor: 'pointer'
          }}
        >
          Non-Veg
        </button>
      </div>
    </div>
  );
}
