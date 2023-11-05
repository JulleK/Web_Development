import { useState, useEffect } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const increment = () => {
    setCount((c) => c + 1);
  };
  useEffect(() => {
    console.log("MY EFFECT CALLED");
  }, [name]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={increment}>+1</button>
      <br />
      <label htmlFor="name">Name: </label>
      <input type="text" value={name} onChange={handleChange} id="name" />
    </>
  );
}
