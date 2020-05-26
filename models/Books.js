const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Book Schema
const BookSchema = new Schema({
  title: {
    type: String
  },
  authors: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("book", BookSchema);
module.exports = Book;
