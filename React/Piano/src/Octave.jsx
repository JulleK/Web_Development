import Key from "./Key";

export default function Octave({
  octaveHeight = 3,
  lastOctave = false,
  volume,
}) {
  const keys = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];
  // if last octave add C note at the end
  if (lastOctave) {
    keys.push("C");
  }

  return (
    <div className="octave">
      {keys.map((key, idx) => {
        // adding the 'octaveHeight' so "C" => "C3" etc.
        let newValue;

        // last C note (idx = 12) will be technically in next octave
        //  that's why we add 1 to the octave height
        if (idx === 12) newValue = key + (octaveHeight + 1);
        else newValue = key + octaveHeight;

        // the black one :O
        if (key[1] === "b")
          return (
            <Key
              value={newValue}
              color="black"
              key={newValue}
              volume={volume}
            />
          );
        // the white one :)
        return <Key value={newValue} key={newValue} volume={volume} />;
      })}
    </div>
  );
}
