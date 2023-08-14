const express = require("express");
const app = express();
const PORT = 4002;

console.log(PORT);

app.get("/", function (req, res) {
  res.send("Welcome to express");
});

const friends = [
  {
    id: 0,
    name: "Sam",
  },
  {
    id: 1,
    name: "John",
  },
];
app.get("/friends", function (req, res) {
  res.json(friends);
});

app.get("/friends/:friendId", function (req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "friend doesn't exist" });
  }
});

app.listen(PORT, function () {
  console.log(`Listening at the http://localhost:${PORT}...`);
});
