import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.send("WELCOME WELCOME!!!");
});

app.listen(PORT, () => {
  console.log("App listening on port", PORT);
});
