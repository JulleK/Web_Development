export default function Key({ color = "white", value, volume }) {
  const playSound = () => {
    const audio = new Audio(`src/sounds/${value}.mp3`);

    audio.volume = volume;
    audio.play();
  };
  return <div className={`${color} key`} onClick={playSound}></div>;
}
