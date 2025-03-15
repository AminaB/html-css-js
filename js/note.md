lucid.app // to draw chart and diagram
cours : modern-javascript-from-the-beginning udemy
JS :
    DOM
    Event
    Asynchronous request
    animation 
    data manipulation (sort, filter, etc...)
    store data (coockies, localstorage, etc ..)
    single page application
    creating APIS & web service node.js, Deno
tools : 
    install node.js to run js code without browser.


Values are stored on the stack (primitive values), and reference values are stored on the heap


array spread operators : [...array1, ...array2],  [...array1,array2]

functions : deslaration, expression and arrow funtion (lambda)

execution context : JS is single theaded lagage ans its synchronyse. 

functions in array : filter, map, reduce

-------------DOM
document.querySelectorAll('.item); // liste items 

toggle : switch between two state

Don't put event attribute like onclick in html, it is not secure

with  you want to put the js in the head use "defer"

-----------hosting free
Netlify : https://app.netlify.com/teams/aminab/sites
buy domain name : https://www.namecheap.com


-------async javaScipt
callback
promise
Ajax and XHR object

-----fetch api ans async await


---------------Web API 
geolocation : navigator.geolocation.getCurentOisition(sucessFunc, errFunction, options);
position on map : https://unpkg.com/leaflet
canva : <canva></canva>
requestAnimationFrame : see clock mini projetc
Audio : music player project <audio></audio>
video : <video></video>
speech recognition : window.speechRecognition ...

------------ OOP

--- module tooling---------


js package manager : npm, to install third part modules
    npm init : to create package.json
    npm install package name
    npm install -D name (for dev dependencies)
Common JS modules : use by node.js, use to bring our own modules, or files : module.exports
ES modules : commonly used in the front-end


npm install -D webpack webpack-cli
npm install -D style-loader css-loader
npm i -D html-webpack-plugin
npm i -D webpack-dev-server
npm i  -D babel-loader @babel/core @babel/preset-env // transform arrow function to regular
npm install --save-dev mini-css-extract-plugin // fix a quick blank flash when started


call back : call afunction after another, better alternative is using promises
xhr : new XMLHttpRequest() : to fetch data frome json file for example its can be in local or in distant server, xhr.open('GET', './movie.json); 

promises : is an object represent an eventual completion or a failure of an async operation
    non blocking, 

promimse.all([p1, p2,p3]).then(() =>{})
if you do not  want to use .then on promises, use async await

POO
- constructor function : use this.
- prototype : special type of object where we can add methods and properties
    EX : Rectangle.prototype.area= function(){}
- inheritance : Rectanle.prototype=  Object.create(Shape.prototype); rectangle now inherite shape 
- class : class Rectangle {constructo(){}}, 
- methods inside class dont have "function", just the name of the method.
- inheritance using class : extends parentName
- private attribute : _attributename

Modules and tooling : just js files that we can import into other
- Common JS module : used by nodejs
- ES Modules : using in front-end app (browser)
- node.js : is a runtime env, we need nodejs to run npm

- module bundle : bundle all module, css together to have only one js file at the end.dist/bundle.js, it will create production files using loader for css or html plugin for html (configure inpur and output in config file webpack.config.js). ex : webpack, css-loader for css, html-webpack-plugin, webbpack dev server
we can install buble to transfrom arroy functuion to regular function

http module : api

- nodeman is like devtools in spring

stack, queue, linkedlist

express framework for nodejs : api

.env : to create var env like port

mongoose : 

deploy fullstack app?