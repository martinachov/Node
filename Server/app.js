var http = require('http');
var fs = require('fs');

//Create a server with request listener function
http.createServer(function(req, res){

    //Synchronuos
    // res.writeHead(200, {'Content-Type':'text/html'});
    // var html = fs.readFileSync(__dirname + '/index.html');
    // res.end(html);

    //Using Stream (Asynchronous)
    // res.writeHead(200, {'Content-Type':'text/html'});
    // fs.createReadStream(__dirname + '/index.html').pipe(res)

    //API
    res.writeHead(200, {'Content-Type':'application/json'});
    var obj = {
        firstName : 'John',
        lastName : 'Doe'
    };
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');
