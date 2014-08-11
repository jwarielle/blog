var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/dist')); //makes a static web app

var server = http.createServer(app);

server.listen(process.env.PORT, function() {
	console.log('server has started on port ' + process.env.PORT);
});

//before run on node, have to specify PORT on command line and also, so when you git push and upload to heroku, delete dist from .gitignore file so that you can move it from just your local machine