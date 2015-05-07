var http = require('http');

var host = process.env.VCAP_APP_HOST || 'localhost';
var port = process.env.VCAP_APP_PORT || 1337;

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<html><body><h1>Hello, Node.js! Running version '+process.version+'</h1></body></html>');
}).listen(port);

console.log("Server running at http://"+ host + ':' + port + "/");