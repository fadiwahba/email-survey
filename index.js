const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  console.log("request: ", req);
  res.send({ hi: "there" });
});

app.listen(PORT);
