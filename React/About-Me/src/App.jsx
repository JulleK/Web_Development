import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { useEffect } from "react";

// get da name fancy :o
import getFancy from "./fancyHoverHelper";
const fancyID = "fancy-name";
// getFancy(fancyID);

function App() {
  useEffect(() => {
    getFancy(fancyID);
  }, []);
  return (
    <div className="ml-4 mt-4 font-sans">
      <h1 className="cursor-pointer text-center text-8xl font-bold">
        <span className="duration-300 hover:text-green-500">About</span>{" "}
        <span id={fancyID} className="fancy-hover">
          JulleK
        </span>
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h2>hi it's me</h2>} />
      </Routes>
    </div>
  );
}

export default App;
