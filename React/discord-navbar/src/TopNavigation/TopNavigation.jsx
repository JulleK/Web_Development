import { FaSearch, FaHashtag, FaRegBell, FaUserCircle } from "react-icons/fa";

import ThemeIcon from "./ThemeIcon";

export default function TopNavigation() {
  return (
    <div className="top-navigation">
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
}

function Search() {
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        spellcheck="false"
      />
      <FaSearch size="18" className="my-auto text-gray-500" />
    </div>
  );
}

function BellIcon() {
  return <FaRegBell size="24" className="top-navigation-icon" />;
}
function UserCircle() {
  return <FaUserCircle size="24" className="top-navigation-icon" />;
}
function HashtagIcon() {
  return <FaHashtag size="20" className="title-hashtag" />;
}
function Title() {
  return <h5 className="title-text">tailwind-css</h5>;
}
