const inputs = document.getElementById("inputs");
const number = document.querySelectorAll('.numbers div');
const operator = document.querySelectorAll('.operators div');
const result = document.getElementById('results');
const clear = document.getElementById('reset');
let currentString = "";
let y = 0;

function add() {
    return x + y
}

function sub() {
    x + y
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

number.forEach(number => {
    number.addEventListener("click", () => {
        inputs.
        display()
    }) 
    }
)

function display() {
    inputs.innerText = currentString; 
}

operator.forEach(operator => {
    operator.addEventListener('click', function() {
        if (operator.innerText === "+") {
            add()
        }
    }) 
    }
)

result.addEventListener("click", function() {
    console.log("click")
})

clear.addEventListener("click", function() {
    inputs.innerHTML = " "; 
})