import { Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import About from "./About";

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
      <nav>
        <Link
          to="/about"
          className="block cursor-pointer text-center text-8xl font-bold"
        >
          <span className="hover:text-aqua-500 transition-all duration-500">
            About
          </span>{" "}
          <span
            id={fancyID}
            className="fancy-hover hover:text-aqua-500 transition-all duration-700"
          >
            JulleK
          </span>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
