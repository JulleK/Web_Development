import { useState } from "react";

import "./App.css";
import Keyboard from "./Keyboard";
import PedalButton from "./PedalButton";

function App() {
  const [pedalActive, setPedalActive] = useState(true);
  const pedalButtonClick = () => setPedalActive(!pedalActive);
  return (
    <>
      <PedalButton pedalActive={pedalActive} onClick={pedalButtonClick} />
      <Keyboard pedalActive={pedalActive} />
    </>
  );
}

export default App;
