const express = require("express");
const app = express();
const db = require("./db/connect.js");
const cors = require("cors");

const users = require("./routes/users");
const books = require("./routes/books.js");

app.use(express.json());
app.use(cors());
app.use("/", users);
app.use("/books", books);

const PORT = 3456;
const start = () => {
  try {
    // connection();
    app.listen(PORT, (err) => {
      console.log(`server is listing on ${PORT}`);
    });
  } catch (error) {
    console.log("there is error to start server", error);
  }
};

start();
