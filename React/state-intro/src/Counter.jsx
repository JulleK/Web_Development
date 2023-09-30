import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      {/* <button onClick={handleClick}>The count is: {count}</button> */}
      <button onClick={() => setCount(count + 1)}>The count is: {count}</button>
    </div>
  );
}
