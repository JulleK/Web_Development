import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 2, target = 7 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  //   const increaseScore = (idx: number) => {
  //     const newScores = [...scores];
  //     newScores[idx] += 1;
  //     setScores(newScores);
  //   };
  function increaseScore(idx: number, score: number) {
    if (score >= target) {
      return;
    }
    setScores((prevScores) =>
      prevScores.map((uldScore, i) => {
        if (i === idx) return uldScore + 1;
        return uldScore;
      })
    );
  }
  function reset() {
    setScores(new Array(numPlayers).fill(0));
  }

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, idx) => (
          <li key={idx}>
            Player{idx + 1}: {score}
            <button onClick={() => increaseScore(idx, score)}>+1</button>
            {score >= target && "WINNER!"}
          </li>
        ))}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
