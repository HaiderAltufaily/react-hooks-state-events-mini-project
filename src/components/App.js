import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [newTasks, setNewTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function filterTasks(newArray) {
    setCategory(newArray);
    console.log(newArray);
  }

  function handleSubmit(newItem) {
    setNewTasks([...newTasks, newItem]);
  }
  function deleteItem(itemName) {
    setNewTasks(
      newTasks.filter((task) => {
        return task.text !== itemName;
      })
    );
  }
  const newArray = newTasks.filter((task) => {
    return category === "All" || task.category === category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        filterTasks={filterTasks}
        categories={CATEGORIES}
        tasks={newArray}
        currentCategory={category}
      />
      <NewTaskForm onTaskFormSubmit={handleSubmit} categories={CATEGORIES} />
      <TaskList
        deleteItem={deleteItem}
        categories={CATEGORIES}
        tasks={newArray}
      />
    </div>
  );
}

export default App;
