// Constants
const express = require("express");
const bodyParser = require("body-parser");
// Custom date module -- testing
const date = require(__dirname + "/date.js");
const app = express();
const port = 3000 || process.env.PORT;
// Array for items listed on homepage
let regItems = [];
// Array for items listed on "Work" subpage
let workItems = [];

// Set EJS.  Need EJS "view" folder
app.set("view engine", "ejs");
// Activate body parser
app.use(bodyParser.urlencoded({
  extended: true
}));

// Listen for the start of the server.
// Either through declared port, or through
// Heroku app chosen by environment
app.listen(process.env.PORT || port, function() {
  console.log("Server started on port " + port);
});

// Create static folder for use of assets needed on servers
app.use(express.static("public"))

// Home route
app.get("/", function(req, res) {

let day = date.getDate();

  // EJS Renderer using "filename", and corresponding key,value pairs in he file
  // Key is in EJS file.  Value is declared in app file
  res.render("list", {
    listTitle: day,
    newListItems: regItems,
  });
});

// For post request, take value of user input, and push to array
// Push back to home route, rendering the list
app.post("/", function(req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");

  } else {
    regItems.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work",
    newListItems: workItems,
  });
});
