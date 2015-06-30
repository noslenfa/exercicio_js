var request = require('request');
request('https://raw.githubusercontent.com/noslenfa/exvasco/master/musics.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
});