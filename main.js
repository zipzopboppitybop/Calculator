const inputs = document.getElementById("inputs");
const number = document.querySelectorAll('.numbers div');
const operator = document.querySelectorAll('.operators div');
const result = document.getElementById('results');
const clear = document.getElementById('clear');
let a = 10;
let b = 10;

inputs.addEventListener("click", function() {
    console.log("click")
})

number.forEach(number => {
    number.addEventListener('click', function() {
        console.log("click");
    }) 
    }
)


function add() {
    return a + b
}

function sub() {
    a + b
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

 operate()
