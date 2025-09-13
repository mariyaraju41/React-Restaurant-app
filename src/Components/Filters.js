import React from "react";

function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegFilter,
  setVegFilter,
}) {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

  return (
    <div className="mb-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search dish for your party..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-2 border rounded-lg mb-3"
      />

      {/* Tabs */}
      <div className="flex space-x-2 mb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-full text-sm ${
              activeCategory === cat ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Veg / Non-Veg */}
      <div className="flex space-x-3">
        <label className="flex items-center space-x-1">
          <input
            type="checkbox"
            checked={vegFilter === "VEG"}
            onChange={() => setVegFilter(vegFilter === "VEG" ? "" : "VEG")}
          />
          <span>Veg</span>
        </label>
        <label className="flex items-center space-x-1">
          <input
            type="checkbox"
            checked={vegFilter === "NON-VEG"}
            onChange={() => setVegFilter(vegFilter === "NON-VEG" ? "" : "NON-VEG")}
          />
          <span>Non-Veg</span>
        </label>
      </div>
    </div>
  );
}

export default Filters;
