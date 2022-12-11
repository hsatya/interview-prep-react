import React, { useState } from "react";
import Todo from "./Todo";

import "./todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  // const [complete, setComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo(name)]);
    setName("");
  };

  const newTodo = (name) => {
    return { id: Date.now(), name: name, completed: false };
  };

  // console.log(todos);

  const handleToggle = (id) => {
    const new_todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    setTodos(new_todos);
  };

  const handleDelete = (id) => {
    const new_todos = todos.filter((todo) => todo.id !== id);
    setTodos(new_todos);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Enter Todo:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <h3>My Todos</h3>
      {todos.map((todo) => (
        <>
          <Todo
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </>
      ))}
    </div>
  );
};

export default Todos;
