const express = require("express"); //Backend framework
const mongoose = require("mongoose"); //Mongoose to interact with mongoDB
const path = require("path");
const app = express();

//api/books
const books = require("./routes/api/books");
//api/user
const user = require("./routes/api/user");
//api/auth
const auth = require("./routes/api/auth");

//Set up the port that will be used. Process.env.PORT for heroku deploy
const PORT = process.env.PORT || 3001;
app.use(express.json());
//Use routes

app.use("/api/books", books);
app.use("/api/user", user);
app.use("/api/auth", auth);

//DB configuration
const db = process.env.MONGODB_URI || "mongodb://localhost/GoogleBooks";
//Connect to mongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Database Connected!"))
  .catch(error => console.log(error));

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
