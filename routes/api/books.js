const express = require("express");
const router = express.Router();

//Books Model
const Book = require("../../models/Books");

//@route Get api/books
// Gets all books, sorts books by date in descending order
router.get("/", (req, res) => {
  Book.find()
    .sort({ date: -1 })
    .then(books => res.json(books));
});

//@route Post api/books, create a book
router.post("/", (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  });
  //Save the new book to the db and return the book back that it is saving in json format
  newBook.save().then(book => res.json(book));
});

//@route Delete api/books/:id
router.delete("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
