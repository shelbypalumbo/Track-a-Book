const express = require("express"); //Backend framework
const mongoose = require("mongoose"); //Mongoose to interact with mongoDB
const bodyParser = require("body-parser"); //bodyparser will allow the server to accept requests and get data from the body, ex post requests
const path = require("path");
const app = express();
//api/books
const books = require("./routes/api/books");
//api/user
// const user = require("./routes/api/user");

//Set up the port that will be used
//process.env.PORT for heroku deploy
const PORT = process.env.PORT || 3001;

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

//Serve static assets if in productions
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//The application will listen on this port
app.listen(PORT, () => console.log(`Server started on ${PORT}!`));
