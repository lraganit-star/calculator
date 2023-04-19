var display = document.getElementById("display");
const numberButtons = document.getElementsByClassName("number");
const operationButtons = document.getElementsByClassName("operator")
const clearButton = document.getElementById("clear")

var inputVal = "";
var num1 = "";
var num2 = "";
var operation = "";

for (const numButton of numberButtons) {
    numButton.addEventListener("click", function() {
        
        display.innerHTML += numButton.innerHTML;
        inputVal += numButton.innerHTML;
    })
}

for (const opButton of operationButtons) {
    opButton.addEventListener("click", function(){

        operation == opButton.innerHTML;
        display.innerHTML += opButton.innerHTML;
        inputVal += opButton
    })
    console.log(opButton.innerHTML)
}


clearButton.addEventListener("click", function() {
    display.innerHTML = ""
    inputVal == ""
})



function addition(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, operator, num2) {
    display.innerHTML += operator;
    switch (operator) {
        case "+": 
            return addition(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

console.log(operation)