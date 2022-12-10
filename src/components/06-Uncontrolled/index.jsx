import React from "react";

let inputValue = React.createRef();

const handleSubmit = (e) => {
  alert(`Input Value: ${inputValue.current.value}`);
  e.preventDefault();
};

const Uncontrolled = () => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputValue} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
