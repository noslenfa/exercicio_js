var express = require('express');
var cors = require('cors');
var request = require('request');
var app = express();

var corsOptions = {
	origin: 'localhost:8000'
};

app.get('/musics', cors(corsOptions), function (req, res) {
	
	request('https://raw.githubusercontent.com/noslenfa/exvasco/master/musics.json', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body);
			res.send(body);
  		}
	});	
});

app.get('/users', cors(corsOptions), function (req, res) {
	
	request('https://raw.githubusercontent.com/noslenfa/exvasco/master/users.json', function (error, response, body) {
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


