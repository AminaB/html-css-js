const fs = require('fs');

// sync
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// async
const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function (err, data) {
	console.log(data);
});

// this will run before redafile wll done
console.log('Done!');
