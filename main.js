let numbers = document.getElementsByClassName(".numberBtn");
let display = document.getElementById("display");
const one = document.getElementById("oneBtn");


one.addEventListener("click", function() {
    console.log("click")
})

function add() {
    sum = x + y;
    console.log(sum);
}

function sub() {
    sum = x - y;
    console.log(sum);
}

function multiply() {
    sum = x * y;
    console.log(sum);
}

function divide() {
    sum = x / y;
    console.log(sum);
}

function operate() {
    add()
}

