import React from "react";

const Counter = ({ counter, increase, decrease }) => (
  <div>
    <p>
      Counter: <strong>{counter}</strong>
    </p>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
  </div>
);

export default Counter;
