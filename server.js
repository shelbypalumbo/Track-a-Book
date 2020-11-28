const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const password = require("./password");

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://heroku_4f749hc7:${password}@cluster0.purga.mongodb.net/Books?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve static assets if in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Use Routes
app.use(routes);

//DB configuration, connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GoogleBooks", {
  useCreateIndex: true,
  useNewUrlParser: true
});

//The application will listen on this port
app.listen(PORT, () =>
  console.log(`🌎  ==> Server listening on PORT ${PORT}!`)
);
