var express = require('express');
var cors = require('cors');
var request = require('request');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/musics', function (req, res) {
	
	request('https://raw.githubusercontent.com/noslenfa/exvasco/master/musics.json', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body);
			res.send(body);
  		}
	});	
});

app.get('/users', function (req, res) {
	
	request('https://raw.githubusercontent.com/noslenfa/exvasco/master/users.json', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    	console.log(body);
		res.send(body);
  		}
	});	
});

app.get('/othermusics', function (req, res) {
	
	request('http://freemusicarchive.org/recent.json', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    	console.log(body);
		res.send(body);
  		}
	});	
});

var server = app.listen(8000, function () {
	var host = server.address().address;
	var port = server.address().port;
});