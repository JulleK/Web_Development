import Lucky7 from "./Lucky7";
import Dice from "./Dice";
import LuckyN from "./LuckyN";
// import { sum } from "./utils";
// import BoxGrid from "./BoxGrid";
// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every((v) => v === dice[0]);
// }

function App() {
  return (
    <>
      {/* <Lucky7 /> */}
      {/* <Dice dice={[5, 1, 2, 6, 5]} /> */}
      <LuckyN numDice={4} goal={12} />

      {/* <BoxGrid /> */}
      {/* <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      /> */}
    </>
  );
}

export default App;
