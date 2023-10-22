import { useState } from "react";
export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function updateFirstName(evt) {
    console.log(evt);
    setFirstName(evt.target.value);
  }
  function updateLastName(evt) {
    console.log(evt);
    setLastName(evt.target.value);
  }
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={updateFirstName}
        id="firstName"
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={updateLastName}
        id="lastName"
      />
      <br />
      <button>Submit</button>
    </div>
  );
}
