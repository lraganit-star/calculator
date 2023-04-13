var display = document.getElementById("display");
const buttons = document.getElementsByTagName("button");
const clearButton = document.getElementById("clear")

var inputVal = "";

for (const button of buttons) {
    button.addEventListener("click", function() {
        display.innerHTML += button.innerHTML;
        inputVal += button.innerHTML;
    })
}

clearButton.addEventListener("click", function() {
    display.innerHTML = ""
})

console.log("inputVal", inputVal)

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
    if (operation == "+") {
        return num1 + num2;
    }

    else if(operation == "-") {
        return num1 - num2; 
    }

    else if(operation == "x") {
        return num1 * num2;
    }

    else if (operation == "÷") {
        return num1 / num2;
    }
}