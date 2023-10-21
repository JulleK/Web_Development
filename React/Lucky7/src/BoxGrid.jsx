import Box from "./Box";
import { useState } from "react";
export default function BoxGrid({ numBoxes = 9 }) {
  const [boxes, setBoxes] = useState(new Array(numBoxes).fill(false));
  const resetBoxes = () => {
    setBoxes(new Array(numBoxes).fill(false));
  };

  const toggleBox = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        if (i === idx) return !value;
        return value;
      });
    });
  };
  return (
    <div className="BoxGrid">
      {boxes.map((b, idx) => {
        return <Box isActive={b} clickFunc={() => toggleBox(idx)} key={idx} />;
      })}
      <button onClick={resetBoxes}>Reset</button>
    </div>
  );
}
