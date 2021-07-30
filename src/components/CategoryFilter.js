import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({ categories, tasks, filterTasks, currentCategory }) {
  function handleClick(e) {
    filterTasks(e.target.name);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        const className = currentCategory === category ? "selected" : null;
        return (
          <button
            className={className}
            name={category}
            onClick={handleClick}
            key={category}
          >
            {" "}
            {category}{" "}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
