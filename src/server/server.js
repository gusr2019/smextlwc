// eslint-disable-next-line no-undef
const fs = require('fs');
const https = require('https');

module.exports = app => {
    // put your express app logic here
    //console.log('********' + __dirname );
	var privateKey = fs.readFileSync( __dirname + '/key.pem' , 'utf8');
	var certificate = fs.readFileSync( __dirname + '/cert.pem' , 'utf8');

	https.createServer({
		key: privateKey,
		cert: certificate
	}, app).listen(5002 , () => {
		console.log('Yay, server started*********');
	});
	
	app.get('/final', (req, res) => {
		res.render('final', { title: 'Express AAAA' });
	});

	app.get('/some/api', (req, res) => {
		// do stuff
		res.json({ status: 'ok' });
	});
};
