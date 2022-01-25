const express = require("express");
const app = express();

var port = process.env.PORT ? Number.parseInt(process.env.PORT) : 11130;

app.get("/", function(req, res) {
  res.send("Hello Ziraat Team from Naciye Akyildiz");
});

app.listen(11130, function() {
  console.log(`NodeJS app listening on port ${port}`);
});