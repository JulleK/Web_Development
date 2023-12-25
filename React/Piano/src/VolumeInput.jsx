export default function VolumeInput({ volume, setVolume }) {
  return (
    <>
      <label id="volumeLabel" htmlFor="volumeInput">
        Volume: {volume}
      </label>
      <button onClick={() => setVolume(0)}>🔈</button>
      <input
        id="volumeInput"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
      <button onClick={() => setVolume(1)}>🔊</button>
    </>
  );
}
