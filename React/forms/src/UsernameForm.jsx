import { useState } from "react";
export default function UsernameForm() {
  const [username, setUsername] = useState("");
  function updateUsername(evt) {
    console.log(evt);
    setUsername(evt.target.value);
  }
  return (
    <div>
      <label htmlFor="username">Enter a username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUsername}
        id="username"
      />
      <button>Submit</button>
    </div>
  );
}
