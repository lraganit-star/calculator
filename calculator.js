var display = document.getElementById("display");
const numberButtons = document.getElementsByClassName("number");
const operationButtons = document.getElementsByClassName("operator");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
var answer = document.getElementById("answer")

var inputVal = "";
var num1 = "";
var num2 = "";
var operation = "";
var opArr = [];
var answer = "";

clearButton.addEventListener("click", function() {
    display.innerHTML = ""
    inputVal == ""
})

for (const opButton of operationButtons) {
    opButton.addEventListener("click", function(){

        operation == opButton.innerHTML;
        display.innerHTML += opButton.innerHTML;
        inputVal += opButton.innerHTML;
    })
    opArr.push(opButton.innerHTML)
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

        else if (operation.length == 0) {
                num1 += numButton.innerHTML;
            }
    })
}

equalsButton.addEventListener("click", function() {
    operate(num1, operation, num2);
    console.log('hi')
});

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
            answer.innerHTML = addition(num1, num2);
            break;
        case "-":
            answer.innerHTML = subtract(num1, num2);
            break;
        case "x":
            answer.innerHTML = multiply(num1, num2);
            break;
        case "÷":
            answer.innerHTML = divide(num1, num2);
            break;
    }
}