/**
 * A simple chat server
 */

var net = require('net');

var chatServer = net.createServer(),
	clientList = [];

chatServer.on('connection', function(client) {
	client.name = client.remoteAddress + ":" + client.remotePort;
	client.write('Hi, ' + client.name + "!\n");
	
	clientList.push(client);
	
	client.on('data', function(data) {
		broadcast(data, client);
	});
	
});

function broadcast(message, client) {
	for (var i = 0; i < clientList.length; i++) {
		if (client != clientList[i]) {
			clientList[i].write(message);
		}
	}
}

chatServer.listen(9000);
console.log('Chat server running...');