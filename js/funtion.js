(function(){
    const user = "john";
    console.log(user);
    const hello=()=>console.log('Hello from the IIFE');
    hello();
})();

(function(name){
    console.log('hello'+name);
})('Shawn');


function getcelcius(f){
    return (f-32)*5/9;
}
temp=(tem)=> (tem-32)*5/9;

//console.log(temp(50));
//console.log(getcelcius(50));

const minMax=(...numbers)=> {Math.min(numbers), Math.max(numbers)};
console.log(minMax(1,2,5,3,4));

(function(lenght, width){
    console.log(`${lenght* width}`)
})(10,5);