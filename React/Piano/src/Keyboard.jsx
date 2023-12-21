import Key from "./Key";
export default function Keyboard({ pedalActive = true }) {
  return (
    <div className="keyboard">
      <div className="octave">
        <Key value="C3" pedalActive={pedalActive} />
        <Key color="black" value="Db3" pedalActive={pedalActive} />
        <Key value="D3" pedalActive={pedalActive} />
        <Key color="black" value="Eb3" pedalActive={pedalActive} />
        <Key value="E3" pedalActive={pedalActive} />

        <Key value="F3" pedalActive={pedalActive} />
        <Key color="black" value="Gb3" pedalActive={pedalActive} />
        <Key value="G3" pedalActive={pedalActive} />
        <Key color="black" value="Ab3" pedalActive={pedalActive} />
        <Key value="A3" pedalActive={pedalActive} />
        <Key color="black" value="Bb3" pedalActive={pedalActive} />
        <Key value="B3" pedalActive={pedalActive} />

        <Key value="C4" />
      </div>
    </div>
  );
}
