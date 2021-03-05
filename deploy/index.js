const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/user/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/user", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/users", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/requests", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3310);
