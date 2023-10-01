import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";
import "./App.css";

const colors = ["#fefcfb", "#1282a2", "#034078", "#001f54", "#0a1128"];

function App() {
  return (
    <div className="App">
      <ColorBoxGrid colors={colors} />
    </div>
  );
}

export default App;
