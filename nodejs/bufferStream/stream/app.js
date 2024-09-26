const fs = require('fs');
const zlib = require('zlib');

const readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 16 * 1024});

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// readable.on('data', function(chunk) {
// 	console.log(chunk);
// 	writable.write(chunk);
// });
 const compressed= fs.createWriteStream(__dirname + '/greet.txt.gz');
const gzip=zlib.createGzip();

//WRITE WITH PIPE

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);
