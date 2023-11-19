export default function Square({ value, onSquareClick, winningSquare }) {
  return (
    <button
      className={winningSquare ? "Square winningSquare" : "Square"}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
