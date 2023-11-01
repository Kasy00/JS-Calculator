const add = function(a, b){
    return a + b;
}

const subtract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return b !== 0 ? a / b : alert('Cannot divide by zero!');
}

let aNumber = '',
    bNumber = '',
    operator = '';

const operate = function(operator, firstNumber, secondNumber){
    if(operator === '+')
        return add(firstNumber, secondNumber);
    else if(operator === '-')
        return subtract(firstNumber, secondNumber);
    else if(operator === '*')
        return multiply(firstNumber, secondNumber);
    else if(operator === '/')
        return divide(firstNumber, secondNumber);
    else
        return "Incorrect operator!";
}