const inputs = document.getElementById("inputs");
const number = document.querySelectorAll('.numbers div');
const operator = document.querySelectorAll('.operators div');
const result = document.getElementById('results');
const clear = document.getElementById('reset');
let a = '';
let b = '';

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

number.forEach(number => {
    number.addEventListener('click', function() {
        inputs.innerHTML = number.innerHTML;
    }) 
    }
)

operator.forEach(operator => {
    operator.addEventListener('click', function() {
        if (operator.innerHTML === '+') {
            add();
            
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




function operate() {
    add()
}

