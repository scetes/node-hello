var express = require("express"),
    path = require("path");

  app = express();

<<<<<<< HEAD
const request = require('request');

app = express();
=======

app.get('/api/:factornum', function (req, res) {

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var ss = String(today.getSeconds()).padStart(2,'0');
var hms = String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0');
var factr = Number(req.params.factornum);


today = yyyy + '-' + mm + '-' + dd + '-' + hms;

factored = factorialize(factr);

  //res.send('hello.  Running factorial(' + factr + ') ' + today + '  = ' + factored);
>>>>>>> ef7051e580c70213cf834bd8b662542de417d8fd

  res.json({"factor": factr, "answer": factored});
});


function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;

  return (num != 1) ? num * factorialize(num - 1) : 1;

}

// Launch server

app.listen(8088);

console.log("node app listening on 8088");
