const Emitter = require('events');
const emitter = new Emitter();
emitter.on('greet', ()=>{
    console.log('Somewhere, someone said hello!!');
});

emitter.on('greet', ()=>{
    console.log('A greeting occurred');
});
console.log('hello');
emitter.emit('greet');
