import { useState, useEffect } from "react";
export default function About() {
  // with this state we add a
  //  content appearing transition later

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div
      className="mx-auto mt-14 text-center text-3xl transition-all duration-700"
      style={{ opacity: isLoading ? 0 : 1 }}
    >
      <div className="mb-3">
        <img
          className="mx-auto w-40 rounded-full"
          src="/src/images/me2.jpg"
          alt="cool photo of JulleK"
        />
      </div>

      <div className="border-b-2 pb-8 text-3xl">
        <p>Hi, my name is Julian, I am from Poland 🇵🇱</p>
        <p>I am 18 years old and I love Programming❤</p>
        <br />
        <p>I create web applications, </p>
        <p>
          <a
            className="text-aqua-400 underline hover:text-aqua-600"
            href="#technologies"
          >
            here
          </a>{" "}
          you can see the technologies I use
        </p>
      </div>
      <div className="mt-20">
        <h3 className="text-5xl font-bold underline">My Interests</h3>
      </div>
      <div className="mt-40">
        <h3 className="font-bold" id="technologies">
          Technologies I Use
        </h3>
      </div>
    </div>
  );
}
