import React, { useState } from "react";

const CounterH = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <>
        <h1>Counter</h1>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </>
    </div>
  );
};

export default CounterH;
