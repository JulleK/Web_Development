export default function Square({ value, onSquareClick }) {
  return (
    <button className="Square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
