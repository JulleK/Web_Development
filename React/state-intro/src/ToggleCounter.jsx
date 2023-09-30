import { useState } from "react";
import "./Toggler.css";

export default function ToggleCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const incrementCount = () => setCount(count + 1);
  return (
    <>
      <p className="Toggler" onClick={toggleIsHappy}>
        {isHappy ? "🙂" : "🙁"}
      </p>
      <p onClick={incrementCount}>{count}</p>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
