var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static(__dirname + '/app/public'));

var friends = require("./app/data/friends.js");

require("./app/routing/htmlRoutes.js")(app, path);

require("./app/routing/apiRoutes.js")(app, friends);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });