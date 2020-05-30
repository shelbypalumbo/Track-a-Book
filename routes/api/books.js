const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// /api/books
router
  .route("/")
  .get(bookController.findAll) //Find all books that are saved in the database
  .post(bookController.create); //Add a book to the books collection in the database

// /api/books/:id
router
  .route("/:id")
  .get(bookController.findById) //Find a book in the database by id
  .put(bookController.update) //Update a book in the database
  .delete(bookController.remove); //Remove a book from the database

module.exports = router;
