let textarea = document.createElement('textarea')
let body = document.querySelector('body')
let input = document.querySelector('input')

function createbutton(value) {
    let body = document.querySelector("body")
    let button = document.createElement('button')
    body.appendChild(button)

    if(num.includes(value)){
        button.classList.add("custombtn")
    }
    button.innerText = value
    button.onclick = function example() {
        writeInput(value)
    }
}
let value = ['(', ')', '%', 'AC', 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+' ]
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let ope = ['(', ')', '%', 'AC','/', '*', '%', 'AC',]

function drawElements(array) {
    for (let a = 0; a < array.length; a++) {
        createbutton(array[a])
    }
}
function writeInput(value) {
    if(num.includes(value)){
        input.value += ` ${value} `
    } else{
        input.value += value
    }   
}
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    };

function temdegt() {
    let result
    if(value[0] === '('){

    }else if(value[1] === ')'){

    }else if(value[2] === '%'){
    
    }else if(value[7] === '/'){

    }else if(value[11] === '*'){
        
    }else if(value[15] === '-'){
        
    }else if(value[17] === '.'){
        
    }else if(value[18] === '='){
        button.onclick = calculator;
    }else if(value[19] === '+'){

    }else if(value[3] === 'AC'){
        button.onclick = clearInput;
    }
    return result
}

drawElements(value)
