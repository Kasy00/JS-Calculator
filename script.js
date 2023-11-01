const digitsBtns = document.querySelectorAll('.digit-button');
const operandsBtns = document.querySelectorAll('.operands-button');
const display = document.querySelector('.display');
const previousScreen = document.querySelector('.previous');
const currentScreen = document.querySelector('.current');
const equalsBtn = document.getElementById('equals-button');
const clearBtn = document.getElementById('clear-button');

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

let aNumber = [],
    bNumber = [],
    operator = '';

const operate = function(operand, firstNumber, secondNumber){
    console.log(operand);
    console.log(firstNumber);
    console.log(secondNumber);
    if(operand === '+')
        return add(firstNumber, secondNumber);
    else if(operand === '-')
        return subtract(firstNumber, secondNumber);
    else if(operand === '*')
        return multiply(firstNumber, secondNumber);
    else if(operand === '/')
        return divide(firstNumber, secondNumber);
    else
        return "Incorrect operator!";
}

const displayScreen = function(button){
    if(operator.length === 0){
        aNumber.push(button.textContent);
        previousScreen.textContent = aNumber.join('');
    }
    else{
        bNumber.push(button.textContent);
        currentScreen.textContent = bNumber.join('');
    }
}

const setOperator = function(button){
    if(button.textContent === '+')
        operator = '+';
    else if(button.textContent === '-')
        operator = '-';
    else if(button.textContent === '×')
        operator = '*';
    else
        operator = '/';
    previousScreen.textContent += operator;
}

const clearDisplay = function(){
    aNumber = [];
    bNumber = [];
    operator = '';
    previousScreen.textContent = '';
    currentScreen.textContent = '';
}

const getResult = function(){
    const result = operate(operator, Number(aNumber.join('')), Number(bNumber.join('')));
    currentScreen.textContent = '';
    previousScreen.textContent = result;
}

digitsBtns.forEach(button => button.addEventListener("click", () => displayScreen(button)));
operandsBtns.forEach(button => button.addEventListener("click", () => setOperator(button)));
clearBtn.addEventListener('click', clearDisplay);
equalsBtn.addEventListener('click', getResult);

