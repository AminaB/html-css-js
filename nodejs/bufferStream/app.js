const buf =  Buffer.alloc(10, 'hello', 'utf8'); // utf8 is default
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());

buf.write('hello2', 'utf8');
console.log(buf.toString());
