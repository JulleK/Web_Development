import { useState } from "react";
import Board from "./Board";
import calculateWinner from "./calculateWinner";
import winningSquares from "./winningSquares";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  let nextSign = currentMove % 2 === 0 ? "X" : "O";
  const currentSquares = history[currentMove];
  const [reverseHistory, setReverseHistory] = useState(false);

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move === currentMove) {
      description = "You are at move #" + move;
    } else if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move} className="move">
        <button
          onClick={() => jumpTo(move)}
          className={move === currentMove ? "currentMove" : null}
        >
          {description}
        </button>
      </li>
    );
  });

  const restart = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  const winner = calculateWinner(currentSquares);
  let status, winSquares;
  let isDraw = currentSquares.every((element) => element !== null);
  if (winner) {
    status = "Winner: " + winner;
    winSquares = winningSquares(currentSquares);
  } else if (isDraw) {
    status = "Draw";
  } else {
    status = "Next player: " + nextSign;
  }

  return (
    <div className="Game">
      <div className="gameBoard">
        <div className="status">{status}</div>
        <Board
          nextSign={nextSign}
          squares={currentSquares}
          onPlay={handlePlay}
          winningSquares={winSquares}
        />
      </div>
      <div className="gameHistory">
        <button
          onClick={() => setReverseHistory(!reverseHistory)}
          className="buttonHistory"
        >
          {reverseHistory ? "Reversed" : "History"}
        </button>
        {!reverseHistory && <ol start={0}>{moves}</ol>}
        {reverseHistory && (
          <ol reversed start={moves.length - 1}>
            {moves.reverse()}
          </ol>
        )}
        {winner || isDraw ? (
          <button className="restart" onClick={restart}>
            Restart
          </button>
        ) : null}
      </div>
    </div>
  );
}
