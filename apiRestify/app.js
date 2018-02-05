/**
 * Module Dependencies
 */
var config = require('./configuration-files/config');
var restify = require('restify');
var mongoose = require('mongoose');
var restifyPlugins = require('restify-plugins');

mongoose.Promise = global.Promise;
/**
  * Initialize Server
  */
var server = restify.createServer({
	name: config.name,
	version: config.version,
});

/**
  * Middleware
  */
server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());

/**
  * Start Server, Connect to DB & Require Routes
  */
server.listen(config.port, () => {
    // establish connection to mongodb
	mongoose.connect(config.db.uri);

	var db = mongoose.connection;

	db.on('error', (err) => {
	    console.error(err);
	    process.exit(1);
	});

	db.once('open', () => {
		  require('./routes')(server);
	    console.log(`Server is listening on port ${config.port}`);
    });
    
});
