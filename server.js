const express = require("express"); //Backend framework
const mongoose = require("mongoose"); //Mongoose to interact with mongoDB
const bodyParser = require("body-parser"); //bodyparser will allow the server to accept requests and get data from the body, ex post requests
// const path = require("path");

//api/books
const books = require("./routes/api/books");
//api/user
// const user = require("./routes/api/user");

//Set up the port that will be used
//process.env.PORT for heroku deploy
const Port = process.env.PORT || 3001;

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//DB configuration
// const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/GoogleBooks")
  .then(() => console.log("Database Connected!"))
  .catch(error => console.log(error));

//Use routes
app.use("/api/books", books);
// app.use("/api/user", user);

//The application will listen on this port
app.listen(Port, () => console.log(`Server started on ${Port}!`));
