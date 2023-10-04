import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>+1</button>
    </div>
  );
}
