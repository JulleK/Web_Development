import { useState } from "react";
import "./ColorBox.css";

export default function ColorBox({ colors }) {
  const randColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const changeColor = () => {
    const newColor = randColor();
    // if new color is the same as previous one
    if (newColor === color) {
      return changeColor();
    }
    setColor(newColor);
  };

  const [color, setColor] = useState(randColor());

  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: color }}
      onClick={changeColor}
    ></div>
  );
}
