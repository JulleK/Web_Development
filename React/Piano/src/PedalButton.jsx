export default function PedalButton({ pedalActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        pedalActive ? "pedalButton pedalActive" : "pedalButton pedalDisabled"
      }
    >
      {pedalActive ? "Pedal On" : "Pedal Off"}
    </button>
  );
}
