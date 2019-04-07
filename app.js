const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/static/views/landing.html");
});

app.listen(process.env.PORT || 8080);
