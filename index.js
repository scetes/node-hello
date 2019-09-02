var express = require("express"),
    path = require("path");

	app = express();



// Config

app.get('/api', function (req, res) {

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

  res.send('hello from dockeroo! ' + today);
});

// Launch server

app.listen(8088);

console.log("node app listening");
