var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + Date() + "<br>");
  res.write(req.url + "<br>");
  res.end('END');
}).listen(8080);