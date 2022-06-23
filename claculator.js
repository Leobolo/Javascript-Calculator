const number1= parseFloat(prompt('Enter the first Number: '));
const number2= parseFloat(prompt('Enter the second Number: '));

const operator= prompt(('Enter operator to perform the calculation(either +, -, * or /):'));

if (operator== '+'){
    result = number1 + number2;
}
else if (operator=='-'){
    result = number1 - number2;
}
else if (operator== '*'){
    result = number1 * number2;
}
else {
    result = number1/number2;
}
window.alert("Result is " + result);