import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        spellCheck="false"
      />
      <FaSearch size="18" className="my-auto text-gray-500" />
    </div>
  );
}
