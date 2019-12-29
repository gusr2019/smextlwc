const path = require('path');
const express = require('express');

const customServer = require(path.resolve('./src/server/'));

const app = express();

var privateKey = fs.readFileSync( __dirname + '/key.pem' , 'utf8');
var certificate = fs.readFileSync( __dirname + '/cert.pem' , 'utf8');

customServer(app);

/*
app.listen(3005, () => {
	console.log('Yay, local server started');
});
*/