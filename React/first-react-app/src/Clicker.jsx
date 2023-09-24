export default function Clicker({ message, buttonText }) {
  const handleClick = () => {
    console.log(message);
  };
  return (
    <div>
      <p>Click The Button</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
