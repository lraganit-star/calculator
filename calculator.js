var display = document.getElementById("display");
const numberButtons = document.getElementsByClassName("number");
const clearButton = document.getElementById("clear")

var inputVal = "";

for (const numButton of numberButtons) {
    numButton.addEventListener("click", function() {
        
        display.innerHTML += numButton.innerHTML;
        inputVal += numButton.innerHTML;
    })
}


clearButton.addEventListener("click", function() {
    display.innerHTML = ""
})

var num1 = "";
var num2 = "";
var operation = "";

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