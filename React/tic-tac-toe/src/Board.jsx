import Square from "./Square";
import calculateWinner from "./calculateWinner.js";

export default function Board({
  nextSign,
  squares,
  onPlay,
  winningSquares = [],
}) {
  function handleClick(i) {
    // if square already has a value or if already won return
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = nextSign;
    onPlay(nextSquares);
  }

  const board = squares.map((value, index) => {
    let winningSquare = false;
    if (winningSquares.includes(index)) winningSquare = true;

    return (
      <Square
        value={value}
        onSquareClick={() => handleClick(index)}
        key={index}
        winningSquare={winningSquare}
      />
    );
  });

  return (
    <div className="Board">
      <div className="boardRow">{board.slice(0, 3)}</div>
      <div className="boardRow">{board.slice(3, 6)}</div>
      <div className="boardRow">{board.slice(6, 9)}</div>
    </div>
  );
}
