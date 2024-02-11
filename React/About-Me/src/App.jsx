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
        <div
          className="mx-auto w-fit cursor-pointer
           text-center text-8xl font-bold shadow"
        >
          <Link
            to="/about"
            className="mr-8 text-aqua-500 transition-all duration-300 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/"
            id={fancyID}
            className="fancy-hover text-aqua-500 transition-all duration-700 hover:text-white"
          >
            JulleK
          </Link>
        </div>
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
