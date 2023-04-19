var display = document.getElementById("display");
const numberButtons = document.getElementsByClassName("number");
const operationButtons = document.getElementsByClassName("operator")
const clearButton = document.getElementById("clear")

var inputVal = "";
var num1 = "";
var num2 = "";
var operation = "";
var opArr = [];

for (const opButton of operationButtons) {
    opButton.addEventListener("click", function(){

        operation == opButton.innerHTML;
        display.innerHTML += opButton.innerHTML;
        inputVal += opButton.innerHTML;
    })
    opArr.append(opButton.innerHTML)
}

// when a button is clicked, 
// the value of the number will show in the display
// it will also populate num1 and num2 with their respective values
for (const numButton of numberButtons) {
    numButton.addEventListener("click", function() {
        
        display.innerHTML += numButton.innerHTML;
        inputVal += numButton.innerHTML;

        if (operation.length > 0){
            num2 += numButton.innerHTML;
        }

        else {
            do {
                num1 += numButton.innerHTML;
            }
            while (operation.length == 0);  
        }
    })
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