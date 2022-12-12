import React from "react";
import { ACTIONS } from ".";

const Todo = ({ todo, dispatch }) => {
  return (
    <li style={{ color: todo.complete ? "green" : "red" }}>
      {todo.name}
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;
