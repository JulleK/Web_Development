import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

export default function LuckyN({
  numDice = 2,
  winCheck = (dice) => sum(dice) === 7,
  title = "Lucky Dice",
}) {
  const [dice, setDice] = useState(getRolls(numDice));
  const roll = () => setDice(getRolls(numDice));
  const isWinner = winCheck(dice);
  return (
    <main>
      <h1>
        {title} {isWinner && "You Win!"}
      </h1>
      <Dice dice={dice} />
      {/* <button onClick={roll}>Re-Roll Dice</button> */}
      <Button clickFunc={roll} label="Re-Roll" />
    </main>
  );
}
