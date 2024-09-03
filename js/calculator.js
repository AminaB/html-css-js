function calculator(a, b, operator){
    switch(operator){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        default:
            return 'Invalid'
    }
}

console.log(calculator(5,2,'+'));


// reduce function

const array = [1,2,5,6,7,8];
const sum= array.reduce((acc, current)=>
     acc + current,0);
console.log(sum);

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce((acc, c)=>acc+c.price,0);
console.log(total);