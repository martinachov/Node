var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt')

// readable.on('data', function(chunk){
//     console.log(chunk.length);
//     writable.write(chunk);
// });

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

//Create a transform Stream (readable and writable)
var gzip = zlib.createGzip()

readable.pipe(writable);

//Want to send it through the compressor, pipe will send my readable chunk to my 
//writable stream, and gzip will transform that chunk, pipe return the gzip stream
readable.pipe(gzip).pipe(compressed);