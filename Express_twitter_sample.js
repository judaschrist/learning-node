/**
 * An twitter like website using Express
 */

var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('Welcome to Node Twitter');
});

app.listen(80);
console.log('123');
