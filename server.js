const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve Static Files from /public
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, function () {
  console.log(`listening on port ${port}...`);
});
