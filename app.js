/*
var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(3000);
*/



var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname + '/'));

/*
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
*/
/*
app.get('/index.html', function(req, res){
	console.log("asdf")
	res.json({'script':'home'});

	//res.redirect("/index.html");
	//console.log("asdf"); // logs to terminal, not browser
});
*/

/*
app.get('/infographics/newsgraphics', function(req, res) {
	res.json({'script':'newsgraphics'});
});
app.get('/en5minutes/1', function(req, res) {
	res.json({'script':'en5minutes-1'});
});
app.get('/en5minutes/2', function(req, res) {
	res.json({'script':'en5minutes-2'});
});
app.get('/html5', function(req, res) {
	res.json({'script':'html5'});
});
app.get('/flash', function(req, res) {
	res.json({'script':'flash'});
});
app.get('/games', function(req, res) {
	res.json({'script':'games'});
});
app.get('/animation', function(req, res) {
	res.json({'script':'animation'});
});
app.get('/illustration', function(req, res) {
	res.json({'script':'illustration'});
});
app.get('/music', function(req, res) {
	res.json({'script':'music'});
});
*/

app.listen(3000);