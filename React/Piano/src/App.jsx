import { useState } from "react";
import "./App.css";
import Keyboard from "./Keyboard";
import VolumeInput from "./VolumeInput";

function App() {
  const [volume, setVolume] = useState(0.5);
  return (
    <>
      <VolumeInput volume={volume} setVolume={setVolume} />
      <Keyboard volume={volume} />
    </>
  );
}

export default App;
