import emojiList from "./emojiList.json";

export default function filterEmoji(searchString, maxResults = 25) {
  searchString = searchString.toLowerCase();
  return emojiList
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(searchString)) return true;
      else if (emoji.keywords.includes(searchString)) return true;
      return false;
    })
    .slice(0, maxResults);
}
