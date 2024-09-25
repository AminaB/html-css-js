function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.great= function(){
    console.log("hello" + this.firstname + " " + this.lastname);
}
const john = new Person('John', 'Doe');
john.great();
const jane = new Person('jane', 'Doe');
jane.great();

console.log(john.__proto__);
console.log(jane.__proto__);
