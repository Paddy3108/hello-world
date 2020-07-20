const http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-type':'text/plan' });
  res.write('Hello World');
  res.end();
}).listen(8080);