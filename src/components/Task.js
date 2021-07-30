import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Task({ tasks, deleteItem, category, text }) {
  function handleDelete(e) {
    const newItem = e.target.name;
    deleteItem(newItem);
  }
  return (
    <div className="task">
      <div className="label"> {category} </div>
      <div key={uuid()} className="text">
        {text}
      </div>
      <button
        name={text}
        onClick={handleDelete}
        key={uuid()}
        className="delete"
      >
        X
      </button>
    </div>
  );
}

export default Task;
