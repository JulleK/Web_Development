import { useState } from "react";
export default function ScoreKeeper() {
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  function increaseP1Score() {
    scores.p1Score += 1;
    setScores({ ...scores });
  }
  return (
    <div>
      <p>Player 1: {scores.p1Score}</p>
      <p>Player 2: {scores.p2Score}</p>
      <button onClick={increaseP1Score}>+1 Player 1</button>
      <button>+1 Player 2</button>
    </div>
  );
}
