import { v4 as uuid } from "uuid";
import { useState } from "react";
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😍" }]);
  //   function addEmoji() {
  //     emojis.push("😍");
  //     setEmojis([...emojis]);
  //   }
  function addEmoji() {
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😍" }]);
  }
  function deleteEmoji(id) {
    setEmojis(emojis.filter((e) => e.id !== id));
  }
  function deleteEmoji(id) {
    setEmojis((oldEmojis) => oldEmojis.filter((e) => e.id !== id));
  }
  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "5rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}
