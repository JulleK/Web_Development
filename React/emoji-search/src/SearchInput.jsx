export default function SearchInput({ value, handleChange }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        spellCheck="false"
      />
    </div>
  );
}
