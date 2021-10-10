import React, { useState } from 'react';

export default function Counter({ children, count: initialCount }) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  console.log('Counter:', count)

  return (
    <>
      <div className="counter bg-red-300">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="children">{children}</div>
    </>
  );
}