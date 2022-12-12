import React from "react";

const ListData = ({ item, handleDelete }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title || item.name}</td>
      <td>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ListData;
