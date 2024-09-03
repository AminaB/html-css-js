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