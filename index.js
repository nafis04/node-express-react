const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/about", function (req, res) {
  res.send("About Page");
});

app.listen(PORT, function () {
  console.log(`Listening at the http://localhost:${PORT}...`);
});
