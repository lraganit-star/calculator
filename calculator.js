var display = document.getElementById("display");
const buttons = document.getElementsByTagName("button");
// const parent = document.getElementById("buttons");
// console.log(buttons)

for (const button of buttons) {
    console.log(button)
    button.addEventListener("click", function() {
        display.innerHTML += button.innerHTML;
    })
}