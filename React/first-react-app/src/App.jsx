import RandomPokemon from "./RandomPokemon.jsx";
import Greeter from "./Greeter.jsx";
import Die from "./Die.jsx";
import ListPicker from "./ListPicker.jsx";
import DoubleDice from "./DoubleDice.jsx";

export default function App() {
  return (
    <div className="App">
      {/* <ListPicker values={[1, 2, 3]} /> */}
      {/* <Greeter person="Bob" from="Colt" />
      <RandomPokemon /> */}
      {/* <Die numSides={20} />
      <Die numSides={200} />
      <Die numSides={2} />
      <Die numSides={1} />
      <Die /> */}
      <DoubleDice />
    </div>
  );
}
