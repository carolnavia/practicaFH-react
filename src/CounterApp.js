import React, { useState } from "react";

import { PropTypes } from "prop-types";

const CounterApp = ({ value }) => {
  const [count, setCount] = useState(value);
  const handleAdd = () => {
    setCount(count + 1);
    //setCount((c) => c + 1)
  };
  const handleSubtract = () => setCount(count - 1);

  const handleReset = () => setCount(value);

  return (
    <div>
      <h1>CounterApp</h1>
      <h2> {count} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number,
};
