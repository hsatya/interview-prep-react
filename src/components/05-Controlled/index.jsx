import React, { useState } from "react";

const Controlled = () => {
  const [inputVal, setInputVal] = useState("");

  const updateInput = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <form>
        <input type="text" onChange={updateInput} />
      </form>
      <p>{inputVal}</p>
    </>
  );
};

export default Controlled;
