import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

import { useState } from "react";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(50);
  return (
    <div>
      <h3>name is: {name}</h3>
      <h3>volume is: {volume}</h3>
      <TextField
        id="standard-basic"
        label="Your Name"
        variant="standard"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider
          aria-label="Volume"
          value={volume}
          onChange={(e, newValue) => setVolume(newValue)}
        />
        <VolumeUp />
      </Stack>
    </div>
  );
}
