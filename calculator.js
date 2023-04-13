var display = document.getElementById("display");
const buttons = document.getElementsByTagName("button");
const clearButton = document.getElementById("clear")

var inputVal = "";

for (const button of buttons) {
    button.addEventListener("click", function() {
        
        display.innerHTML += button.innerHTML;
        inputVal += button.innerHTML;
        operate();
    })
}

console.log("inputVal", inputVal)
console.log('display', display.innerHTML)

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

function operate(num1, operation, num2) {
    switch (operator) {
        case "+": 
            return addition(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);\
        case "÷":
            return divide(num1, num2);
    }
}