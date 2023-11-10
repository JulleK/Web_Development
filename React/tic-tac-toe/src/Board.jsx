import { useState } from "react";
import Square from "./Square";
import calculateWinner from "./calculateWinner.js";

export default function Board() {
  const [squares, setSquares] = useState(Array(9));
  const [nextSign, setNextSign] = useState("X");
  const [status, setStatus] = useState("The next player:");
  function handleClick(i) {
    // if square already has a value or if already won return
    if (squares[i] || calculateWinner(squares)) return;

    squares[i] = nextSign;
    setSquares([...squares]);

    if (nextSign == "X") setNextSign("O");
    else setNextSign("X");

    // check if win
    if (calculateWinner(squares)) {
      setStatus("Winner: ");
      setNextSign(calculateWinner(squares));
    }
  }
  return (
    <div className="Board">
      <div className="status">
        {status} {nextSign}
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
