const display = document.getElementById("display");
const numberButtons = document.getElementsByClassName("number");
const operationButtons = document.getElementsByClassName("operator");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const answerDisplay = document.getElementById("answer")

var inputVal = "";
var num1 = "";
var num2 = "";
var operation = "";
var opArr = [];

clearButton.addEventListener("click", function() {
    display.innerHTML = ""
    inputVal == ""
    answerDisplay.innerHTML = ""
    num1 = "";
    num2 = "";
    operation = "";

})

for (const opButton of operationButtons) {
    opButton.addEventListener("click", function(){

        operation = opButton.innerHTML;
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
    operate(Number(num1), operation, Number(num2));
});

function addition(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function operate(num1, operator, num2) {

    switch (operator) {
        case "+": 
            answerDisplay.innerHTML = addition(num1, num2);
            break;

        case "-":
            answerDisplay.innerHTML = subtract(num1, num2);
            break;

        case "x":
            answerDisplay.innerHTML = num1 * num2;
            break;
            
        case "÷":
            if (num1 > num2) {
                answerDisplay.innerHTML = num1 / num2; 
            }
            else {
            answerDisplay.innerHTML = num1 / parseFloat(num2);
            }
            break;
    }
}