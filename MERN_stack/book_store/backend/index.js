import express from "express";
import mongoose from "mongoose";
import { PORT, mongodbUrl } from "./config.js";
import bookRouter from "./routes/booksRoutes.js";
import cors from "cors";

const app = express();

// parse the data
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for handling CORS Policy
// so that react will have access to our server
// Option 1: allow all origins
// app.use(cors());
// Option 2: Allow custom origins
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  return res.send("WELCOME WELCOME!!!");
});

app.use("/books", bookRouter);

mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("MongoDB Connected!");
    app.listen(PORT, () => {
      console.log("App listening on port", PORT);
    });
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });
