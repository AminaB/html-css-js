const EventEmitter = require('events');
const util = require('util');

function Greetr(){
    this.greeting='Hello World';
}
util.inherits(Greetr, EventEmitter);
Greetr.prototype.greet = function(message){
    console.log(this.greeting + ':' +message);
    this.emit('greet', message);
}

const greeter1= new Greetr();
greeter1.on('greet', function(message){
    console.log('someone greeted : '+message);
});
greeter1.greet('tony');
