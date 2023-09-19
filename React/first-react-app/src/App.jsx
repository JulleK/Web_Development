import RandomPokemon from "./RandomPokemon.jsx";
import Greeter from "./Greeter.jsx";
import Die from "./Die.jsx";
import ListPicker from "./ListPicker.jsx";
import DoubleDice from "./DoubleDice.jsx";
import Heading from "./Heading.jsx";
import ColorList from "./ColorList.jsx";

export default function App() {
  return (
    <div className="App">
      {/* <ListPicker values={[1, 2, 3]} />
      <Greeter person="Bob" from="Colt" />
      <RandomPokemon />
      <Die numSides={20} />
      <Die numSides={200} />
      <Die numSides={2} />
      <Die numSides={1} />
    <Die /> */}

      {/* <Heading color="cyan" text="Very good dice game!" />
      <Heading text="Testtttt" />
      <Heading color="magenta" text="I love dice games!!" fontSize="30px" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}

      <ColorList colors={["red", "pink", "purple", "teal", "orangered"]} />
    </div>
  );
}
