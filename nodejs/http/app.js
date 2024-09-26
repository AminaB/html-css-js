const http = require('http');
const fs= require('fs');

// http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname+'/index.html').pipe(res);
// }).listen(1337, '127.0.0.1');

//json
// http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     const obj= {
//         firstname: 'John',
//         lastname: 'Doe',
//     };
//     res.end(JSON.stringify(obj));
// }).listen(1337, '127.0.0.1');

http.createServer((req, res)=>{
    if(req.url === '/'){
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else if(req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const obj= {
            firstname: 'John',
            lastname: 'Doe',
        };
        res.end(JSON.stringify(obj));
    }else {
        res.writeHead(404);
        res.end();
    }

}).listen(1337, '127.0.0.1');
