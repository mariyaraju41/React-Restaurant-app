import React, { useCallback, useMemo, useState } from 'react';
import './index.css';
import './App.css';
import { DISHES } from './data/mockDishes';
import Filters from './Components/Filters';
import DishList from './Components/DishList';
import IngredientModal from './Components/IngredientModel';

const CATEGORIES = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];

function App() {
  const [activeCategory, setActiveCategory] = useState('STARTER');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalDish, setModalDish] = useState(null);

  const toggleAdd = useCallback((id) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const toggleRemove = useCallback((id) => {
    setSelectedIds((prev) => prev.filter((x) => x !== id));
  }, []);

  const onViewIngredients = useCallback((dish) => setModalDish(dish), []);
  const onCloseModal = useCallback(() => setModalDish(null), []);

  // Filter dishes by category, search, veg/non-veg
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return DISHES.filter((d) => d.mealType === activeCategory)
      .filter((d) => (q ? d.name.toLowerCase().includes(q) : true))
      .filter((d) => {
        if (vegOnly && !nonVegOnly) return d.type === 'VEG';
        if (!vegOnly && nonVegOnly) return d.type === 'NON-VEG';
        return true;
      });
  }, [activeCategory, searchTerm, vegOnly, nonVegOnly]);

  // Count how many dishes exist in each category
  const counts = useMemo(() => {
    const acc = CATEGORIES.reduce((a, c) => ({ ...a, [c]: 0 }), {});
    DISHES.forEach((d) => {
      if (acc.hasOwnProperty(d.mealType)) acc[d.mealType] += 1;
    });
    return acc;
  }, []);

  return (
    <div className="app-container">
      <h1>TheChefkart — Party Menu Selection</h1>

      <Filters
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        nonVegOnly={nonVegOnly}
        onToggleVeg={() => setVegOnly((v) => !v)}
        onToggleNonVeg={() => setNonVegOnly((n) => !n)}
        counts={counts}
      />

      <DishList
        dishes={filtered}
        selectedIds={selectedIds}
        onAdd={toggleAdd}
        onRemove={toggleRemove}
        onViewIngredients={onViewIngredients}
      />

      <div className="footer">
        <div>Total Dish Selected: <strong>{selectedIds.length}</strong></div>
        <button>Continue</button>
      </div>

      <IngredientModal dish={modalDish} onClose={onCloseModal} />
    </div>
  );
}

export default App;
