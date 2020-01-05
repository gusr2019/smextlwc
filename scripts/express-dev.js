const path = require('path');
const express = require('express');

const customServer = require(path.resolve('./src/server/server.js'));

const app = express();

customServer(app);

/*
app.listen(3005, () => {
	console.log('Yay, local server started');
});
*/