import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code");
  function handleInput(e) {
    setDetails(e.target.value);
  }
  function handleSelect(e) {
    setCategory(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      category: category,
      text: details,
    };
    onTaskFormSubmit(newItem);
  }

  return (
    <form onSubmit={handleFormSubmit} className="new-task-form">
      <label>
        Details
        <input value={details} onChange={handleInput} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={category} onChange={handleSelect} name="category">
          {categories.map((category) => {
            return category !== "All" ? (
              <option key={uuid()}> {category} </option>
            ) : null;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
