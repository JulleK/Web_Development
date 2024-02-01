import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="mx-10 mt-32 text-center text-4xl md:mt-40 lg:mt-60 xl:mt-72">
        <p>
          Hi! My name is <span className=" text-aqua-400">Julian.</span>
        </p>
        <p>I am very happy to see you on my page!</p>
      </div>
      <div className="sm:3xl mt-14 text-center text-2xl md:text-5xl">
        <Link
          to="/about"
          className="rounded-xl border-4
           border-aqua-500 p-2 text-aqua-400 transition-all
            duration-150 focus-within:rounded-3xl
           hover:border-aqua-600 hover:text-aqua-500"
        >
          Get To Know Me Better!
        </Link>
      </div>
    </>
  );
}
