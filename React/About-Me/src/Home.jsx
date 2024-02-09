import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="mx-10 mt-32 text-center text-4xl md:mt-64">
        <p>
          Hi! My name is <span className=" text-aqua-400">Julian.</span>
        </p>
        <p>I am very happy to see you on my page!</p>
      </div>
      <div
        className="sm:3xl mx-auto mt-32 w-fit rounded-xl
          border-4 border-aqua-500 p-3 text-center
           text-4xl text-aqua-400 transition-all
          duration-300 focus-within:rounded-3xl
          hover:scale-110 hover:border-aqua-300
          hover:text-aqua-200 md:text-5xl"
      >
        <Link to="/about" className="">
          Get To Know Me Better!
        </Link>
      </div>
    </>
  );
}
