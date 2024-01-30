import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="mx-10 mt-32 text-center text-4xl md:mt-40 lg:mt-60 xl:mt-80">
        <p>
          Hi! My name is <span className=" text-aqua-400">Julian.</span>
        </p>
        <p>I am 18 years old and am very happy to see you on my page!</p>
      </div>
      <div className=" mt-10 text-center text-5xl">
        <Link
          to="/about"
          className="hover:border-aqua-600 border-aqua-500
           hover:text-aqua-500 text-aqua-400 rounded-xl border-4
            p-2 transition-all duration-150 focus-within:rounded-3xl"
        >
          Get To Know Me Better!
        </Link>
      </div>
    </>
  );
}
