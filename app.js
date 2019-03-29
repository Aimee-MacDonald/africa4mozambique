const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/static/views/index.html");
});

app.listen(8080, console.log("Server Listening on Port: 8080"));
