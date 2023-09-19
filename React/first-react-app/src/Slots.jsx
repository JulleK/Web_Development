export default function Slots({ val1, val2, val3 }) {
  const isWinner = val1 === val2 && val1 === val3;
  return (
    <div>
      <h1>
        {val1} {val2} {val3}
      </h1>
      {isWinner ? (
        <h2 style={{ color: "green" }}>You win!</h2>
      ) : (
        <h2 style={{ color: "red" }}>You lose</h2>
      )}
      {isWinner && <h3>Congrats!!!</h3>}
      <hr />
    </div>
  );
}
