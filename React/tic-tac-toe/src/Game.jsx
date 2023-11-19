import { useState } from "react";
import Board from "./Board";
import calculateWinner from "./calculateWinner";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [nextSign, setNextSign] = useState("X");
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);

    // change next sign to next player
    // "O" -> "X"; "X" -> "O";
    if (!calculateWinner(nextSquares)) {
      if (nextSign == "X") setNextSign("O");
      else setNextSign("X");
    }
  };
  return (
    <div className="game">
      <div className="game-board">
        <Board
          nextSign={nextSign}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-history">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
