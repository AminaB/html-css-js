var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "root",
		database: "addressbook"
	});
	
	con.query('SELECT ID, Firstname, Lastname, Address FROM People',
		function(err, rows) {
			if(err) throw err;
			console.log(rows[0].Firstname);
		}
	);
	
	next();
});

htmlController(app);

apiController(app);

app.listen(port);
