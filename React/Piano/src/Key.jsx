export default function Key({ color = "white", value }) {
  const playSound = () => {
    const audio = new Audio(`src/sounds/${value}.mp3`);

    audio.volume = 0.3;
    audio.play();
  };
  return <div className={`${color} key`} onClick={playSound}></div>;
}
