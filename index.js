var express = require("express"),
    path = require("path");

	app = express();



// Config

app.get('/api', function (req, res) {
  res.send('hello from docker in Google Container Engine');
});

// Launch server

app.listen(8088);

console.log("node app listening on port 8088")
