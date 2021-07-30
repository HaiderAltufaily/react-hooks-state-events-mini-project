import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({
  categories,
  tasks,
  filterTasks,
  currentCategory,
  setCategory,
}) {
  const categoryButtons = categories.map((category) => {
    const className = category === currentCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => setCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
