const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// connect to mongodb through mongoose
mongoose
  .connect(db)
  // promise
  .then(() => console.log("mongoDB connected!!"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello universe its ya boy bewhy"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
