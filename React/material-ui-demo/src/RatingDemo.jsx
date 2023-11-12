import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function RatingDemo() {
  const [value, setValue] = useState(3);
  return (
    <div>
      <h1>Rating Demo</h1>
      <Rating
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
}
