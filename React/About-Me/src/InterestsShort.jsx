import Interest from "./Interest";

export default function InterestsShort() {
  return (
    <div className="mx-auto mt-20 max-w-[35rem]">
      <h3 className="text-5xl font-bold text-aqua-400">My Interests</h3>
      <ul className="text-3xl">
        <Interest
          title="Programming"
          text="I create websites and I love it. Currently I mostly use Javascript and React.
          I have basic knowledge of: Python, C#, C++. I once tried making video games but playing
          and making them is a completely different thing"
        />
        <Interest
          title="Playing video games"
          text="I love playing video games.
          I like playing mulitplayer shooters with friends:
          Counter Strike, Apex legends and Battlefield games.
          I also very much enjoy RPGs: Elden Ring, 
          Baldur's Gate 3, The Witcher 3 and Sekiro.
          Some other games I love: Stardew Valley, Path of Exile,
          Monster Hunter: World, League of Legends, Deep Rock Galactic,
          Terraria, Hollow Knight, Hades, Celeste and many more ❤"
        />
        <Interest
          title="Reading Books"
          text="My favorite genre is Fantasy. 
          In the past few years I have read the Ranger's Apprentice 
          series up to the 16th part. I really like the story and the characters! 
          In 2023 I started reading the Witcher which is a very good, Polish book.
          I have read 3 parts so far, so I have a few more to read.
          Right now I read The lord of the Rings, since I am a huge fan of the films.
          It's a little bit of a challenge for me, because it's the first book I read
          in English (all of the previous books I read were written in Polish)"
        />
      </ul>
    </div>
  );
}
