import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [lstate, setLstate] = useState(false);

  const addDataToList = (e) => {
    setTodos((todos) => [...todos, e.target.value]);
    setLstate(false);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <label htmlFor="">Add Next:</label> <br />
      <input type="text" onChange={addDataToList} />
      <button onClick={() => setLstate(true)}>Add</button>
      <ul>
        {lstate
          ? todos.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })
          : ""}
      </ul>
    </div>
  );
};

export default Todo;
