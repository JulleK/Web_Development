export default function Emoji({ emoji, title, notify }) {
  const onClick = () => {
    // copies an emoji to clipboard on click
    navigator.clipboard.writeText(emoji);

    // notify displays "copied to clipboard"
    notify();
  };
  return (
    <div className="Emoji" onClick={onClick}>
      {emoji} {title}
    </div>
  );
}
