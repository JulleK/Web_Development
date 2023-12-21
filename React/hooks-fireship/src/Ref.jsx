import { useRef } from "react";

export default function Ref() {
  const myInput = useRef(null);

  const handleClick = () => myInput.current.focus();

  return (
    <>
      <input type="text" ref={myInput} />
      <button onClick={handleClick}>Button</button>;
    </>
  );
}
