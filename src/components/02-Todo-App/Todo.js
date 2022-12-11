import React from "react";

const Todo = ({ todo, handleToggle, handleDelete }) => {
  return (
    <div>
      <span style={{ color: todo.completed ? "green" : "red" }}>
        {todo.name}
      </span>
      <button onClick={() => handleToggle(todo.id)}>Toggle</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
