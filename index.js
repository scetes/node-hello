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

factorialize(2000);

  res.send('hello.  Running factorial 2000! ' + today);
});


function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
    console.log("iteration: " + i)
  }
  return num;
}

// Launch server

app.listen(8088);

console.log("node app listening");
