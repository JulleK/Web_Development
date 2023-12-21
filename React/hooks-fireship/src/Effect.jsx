import { useState, useEffect } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hello side effect");

    return () => console.log("goodbye component");
  });

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
