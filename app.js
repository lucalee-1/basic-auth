const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();

mongoose.connect("mongodb://localhost:27017/simple-auth-project");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Database connected");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  res.send(req.body);
});

app.get("/secret", (req, res) => {
  res.send("Secret message");
});

app.listen(3000, () => {
  console.log("Connected on port 3000");
});
