import { useState } from "react";

export default function TheBestSignupForm() {
  const [formData, setFormData] = useState({ color: "" });
  const handleChange = (evt) => {
    // console.dir(evt.target);
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData(() => {
      formData[changedField] = newValue;
      return { ...formData };
    });
  };
  return (
    <div>
      <label htmlFor="color">Your Favorite Color</label>
      <input type="text" name="color" id="color" onChange={handleChange} />
      <br />
    </div>
  );
}
