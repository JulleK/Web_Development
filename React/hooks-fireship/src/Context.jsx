import { createContext, useContext } from "react";
const moods = {
  happy: "😀",
  sad: "😥",
};

const MoodContext = createContext(moods);

function MoodEmoji() {
  const mood = useContext(MoodContext);
  return <p>{mood}</p>;
}

export default function Context() {
  return (
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji />
    </MoodContext.Provider>
  );
}
