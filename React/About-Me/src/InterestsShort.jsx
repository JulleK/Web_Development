import Interest from "./Interest";

export default function InterestsShort() {
  return (
    <div className="mx-auto mt-20 max-w-96">
      <h3 className="text-5xl font-bold text-aqua-400">My Interests</h3>
      <ul className="text-3xl">
        <Interest
          title="Programming"
          text="I create websites and I love it. I tried making video games but playing
        and making them is a completely different thing. Currently I mostly use Javascript and React."
        />
        <Interest title="Playing video games" text="" />
      </ul>
    </div>
  );
}
