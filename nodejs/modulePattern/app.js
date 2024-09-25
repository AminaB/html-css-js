const greet1 = require('./greet1');
greet1();
const greet2 = require('./greet2').greet;
greet2();

const greet3 = require('./greet3');
greet3.greet();
greet3.greeting="hello world again";

const greet3b = require('./greet3');
greet3b.greet();
 const Greet4 = require('./greet4');
 const grt= new Greet4();
grt.greet();

const greet5= require('./greet5');
greet5.greet();
