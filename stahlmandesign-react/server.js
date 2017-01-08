var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app)

app.use(express.static(__dirname + '/build'));

app.get('/*', function(req, res) {
  res.sendfile(__dirname + '/build/index.html');
});
app.listen(3003);
