import "./style.css";
import React, { useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  //   const [display, setDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo(name)]);
    setName("");
  };

  const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false };
  };

  const handleToggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
        return todo;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  //   console.log(todos);

  return (
    <div className="container">
      <h1>My Todos App</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter todo:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>Todos</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
