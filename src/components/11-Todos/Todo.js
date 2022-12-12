import React from "react";

const Todo = ({ todo, handleToggle, handleDelete }) => {
  return (
    <tr>
      <td style={{ color: todo.complete ? "green" : "red" }}>{todo.name}</td>
      <td>
        <button onClick={() => handleToggle(todo.id)}>Toggle</button>
      </td>
      <td>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Todo;
