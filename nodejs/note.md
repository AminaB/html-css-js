Ecmascript : standard based of js, core standard, how the language should work, ES6 2015 new js standard
there is many js engine. ex : V8
v8 is google js engine
js engine : convert js code into something the computer processor can understand
V8 : open source, google engine, written in c++,

we can use v8 isinde et c++ program to transform js code into machine code.
Google Chrome is a c++ program embedded a v8 engine

Node.js is a C++ program with V8 embedded, server technologies

---------- Node JS ------------------
Node js : c++ core and js core

Modules : reusable block of code
common js module : standard of how modules should be structured
require grab only a single js file, if we pass a folder to a require method, it grabs the index.js file

Modules and ES6 : import * as greetr from 'gret'

Events : 
system event : c++core, library libuv
custom events : js core, library event emitter
a function constructor can inherit from event emitter.

Object.create(person);

'use strict' inside js file to prevent silly mistake

js is synchronised, nodejs is asynchronous and use libuv to run things simultaneously.

Buffer : a temporary holding spot for data
stream : sequence of data available over time, moving data

error first callback : take an error parameter, its will be null if no error.

Http
TCp /IP : 
