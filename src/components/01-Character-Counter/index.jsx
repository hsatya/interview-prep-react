import React, { useState } from "react";

const CharacterCounter = () => {
  const [char, setChar] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setChar(e.target.value);
    setCount(e.target.value.length);
  };

  return (
    <div>
      <label htmlFor="">Enter Chararcters:</label> <br />
      <input type="text" value={char} onChange={handleChange} />
      <p>{count < 1 ? "" : `${char}: ${count}`}</p>
    </div>
  );
};

export default CharacterCounter;
