import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, categories, deleteItem }) {
  return tasks.map((task) => {
    return (
      <div key={uuid()} className="tasks">
        <Task
          deleteItem={deleteItem}
          text={task.text}
          category={task.category}
        />
      </div>
    );
  });
}

export default TaskList;
