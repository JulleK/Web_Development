import Octave from "./Octave";

export default function Keyboard({ octaveCount = 2, startingOctave = 3 }) {
  const octaves = [];
  for (let i = 0; i < octaveCount; i++) {
    // lastOctave is a bool, it gets value by
    //  checking if this is the last octave
    octaves.push(
      <Octave
        lastOctave={i + 1 === octaveCount}
        octaveHeight={startingOctave + i}
        key={i}
      />
    );
  }

  return <div className="keyboard">{octaves.map((oct) => oct)}</div>;
}
