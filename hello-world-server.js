var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World, 80\n');
}).listen(80, '192.168.2.221');

console.log('Server running at http://127.0.0.1:1337/');