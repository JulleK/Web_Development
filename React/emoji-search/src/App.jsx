import "./App.css";
import { useState } from "react";
import SearchInput from "./SearchInput";
import filterEmoji from "./filterEmoji";
import Emoji from "./Emoji";

// react-toastify to display "saved to clipboard" notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () =>
  toast.info("Copied to clipboard", {
    toastId: "toastAvoidsDuplicates",
  });

function App() {
  const [searchText, setSearchText] = useState("");
  const [foundEmojis, setFoundEmojis] = useState([]);

  const handleChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    setFoundEmojis(filterEmoji(newSearchText));
  };

  return (
    <div>
      <h1>Emoji Search</h1>
      <SearchInput value={searchText} handleChange={handleChange} />
      {foundEmojis.map((emoji, idx) => {
        return (
          <Emoji
            key={idx}
            emoji={emoji.symbol}
            title={emoji.title}
            notify={notify}
          />
        );
      })}

      <ToastContainer
        autoClose={1200}
        limit={1}
        pauseOnHover={false}
        hideProgressBar={true}
        pauseOnFocusLoss={false}
      />
    </div>
  );
}

export default App;
