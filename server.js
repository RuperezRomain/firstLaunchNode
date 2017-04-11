const http = require('http');

const hostname = '127.0.0.1';

const port = 8080;

const server = http.createServer(
	(request, response) => {
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/plain');
	response.end('Bonjour Béziers\n');
	}

);

server.listen(port, hostname, function(){
	console.log('Le serveur écoute ici : http://' + hostname + ":" + port );
});
