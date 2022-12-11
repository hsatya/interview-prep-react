import "./calc.css";
import React, { useState } from "react";

const Calculator = () => {
  const [options, setOptions] = useState("Addition");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let ans;
    switch (options) {
      case "Addition":
        ans = Number(input1) + Number(input2);
        setResult(ans);
        break;
      case "Substraction":
        ans = Number(input1) - Number(input2);
        setResult(ans);
        break;
      case "Multiplication":
        ans = Number(input1) * Number(input2);
        setResult(ans);
        break;
      case "Division":
        ans = Number(input1) / Number(input2);
        setResult(ans);
        break;
      default:
        setResult("");
    }
    setInput1("");
    setInput2("");
  };

  const clearAll = () => {
    setOptions("Addition");
    setInput1("");
    setInput2("");
    setResult("");
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <form>
        <div className="input">
          <label>Input first number: </label>
          <input
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Input second number: </label>
          <input
            type="number"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <select
          name="operations"
          id="operations"
          value={options}
          onChange={(e) => {
            setOptions(e.target.value);
          }}
        >
          <option value="Addition">Addition</option>
          <option value="Substraction">Substraction</option>
          <option value="Multiplication">Multiplication</option>
          <option value="Division">Division</option>
        </select>
        <button onClick={handleSubmit}>Calculate</button>
        <button onClick={clearAll}>Clear</button>
      </form>
      <p className="display">{result}</p>
    </div>
  );
};

export default Calculator;
