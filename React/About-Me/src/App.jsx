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
    <div className="flex min-h-screen flex-col pt-4 font-sans">
      <nav>
        <Link
          to="/about"
          className="block cursor-pointer text-center text-8xl font-bold"
        >
          <span className="transition-all duration-500 hover:text-aqua-500">
            About
          </span>{" "}
          <span
            id={fancyID}
            className="fancy-hover transition-all duration-700 hover:text-aqua-500"
          >
            JulleK
          </span>
        </Link>
      </nav>
      <article>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </article>
      <footer className="mb-1 mt-auto text-center text-gray-600">
        © Copyright 2024 JulleK <br />
        All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
