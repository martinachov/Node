var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds221228.mlab.com:21228/addressbook');

//Define la estructura del documento
var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

//Esta funcion me permite crear objetos Persona
var Person = mongoose.model('Person', personSchema);

var john = Person({
	firstname: 'John',
	lastname: 'Doe',
	address: '55 main St.'
});

var jane = Person({
	firstname: 'Jane',
	lastname: 'Doe',
	address: '55 main St.'
});

john.save(function(err) {
	if (err) throw err;
	console.log('Person saved!!');
});


jane.save(function(err) {
	if (err) throw err;
	console.log('Person saved!!');
});


var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	//Recupera todos los usuarios de la BD
	Person.find({}, function(err, users){
		if (err) throw err;
		console.log(users);
	});

	next();
});

htmlController(app);

apiController(app);

app.listen(port);