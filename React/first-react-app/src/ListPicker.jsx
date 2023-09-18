export default function ListPicker({ values }) {
  const randIndex = Math.floor(Math.random() * values.length);
  const randElement = values[randIndex];
  return (
    <div>
      <p>The List of values: {values} </p>
      <p>Random Element is: {randElement} </p>
    </div>
  );
}
