import "./style.css";
import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  NEW_TODO: "new-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.NEW_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.NEW_TODO, payload: { name: name } });
    setName("");
  };

  //   console.log(todos);

  return (
    <div className="container">
      <h1>My Todos App</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter todo: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <ol>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </ol>
    </div>
  );
};

export default Todos;
