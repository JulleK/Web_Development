import { useState } from "react";
export default function BetterSignupForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  function handleChange(evt) {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      currData[changedField] = newValue;
      return { ...currData };
    });
  }
  function handleSubmit() {
    console.log(formData);
  }
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        value={formData.firstName}
        onChange={handleChange}
        id="firstName"
        name="firstName"
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        id="lastName"
        name="lastName"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
