var express = require('express');
var request = require('request');
var app = express();

app.get('/musics', function (req, res) {
	res.send();
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
  	// console.log('Example app listening at http://%s:%s', host, port);
});

request('https://raw.githubusercontent.com/noslenfa/exvasco/master/musics.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
});