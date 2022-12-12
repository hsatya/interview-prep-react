// import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import ListData from "./ListData";

const API = () => {
  const [resourseType, setResourseType] = useState("posts");
  const [items, setItems] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resourseType}`
    );
    return response;
  };
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${resourseType}`
  //     );
  //     return response;
  //   };

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json));
  //   }, [resourseType]);

  useEffect(() => {
    fetchData()
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [fetchData, resourseType]);

  //   useEffect(() => {
  //     fetchData(resourseType)
  //       .then((response) => setItems(response))
  //       .catch((err) => console.log(err));
  //   }, [fetchData, resourseType]);

  //   console.log(items[0]);

  const handleDelete = (id) => {
    const new_item = items.filter((item) => item.id !== id);
    setItems(new_item);
  };

  return (
    <div className="container">
      <h1>API using fetch</h1>
      <div>
        <button onClick={() => setResourseType("posts")}>Posts</button>
        <button onClick={() => setResourseType("todos")}>Todos</button>
        <button onClick={() => setResourseType("comments")}>Comments</button>
      </div>
      <h2>{resourseType}</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>{resourseType === ("posts" || "todos") ? "Title" : "Name"}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <ListData key={item.id} item={item} handleDelete={handleDelete} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default API;
