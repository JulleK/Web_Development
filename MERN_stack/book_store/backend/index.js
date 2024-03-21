import express, { response } from "express";
import mongoose from "mongoose";
import { PORT, mongodbUrl } from "./config.js";
import { Book } from "./models/bookModel.js";

const app = express();

// parse the data
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("WELCOME WELCOME!!!");
});

// Route to create a new book
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

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
