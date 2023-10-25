let textarea = document.createElement('textarea')
let body = document.querySelector('body')
body.appendChild(textarea)

function createbutton(value) {
    let body = document.querySelector("body")
    let button = document.createElement('button')
    body.appendChild(button)

    if(num.includes(value)){
        button.classList.add("custombtn")
    }
    button.innerText = value
}
let value = ['(', ')', '%', 'AC', 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+' ]
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let ope = ['(', ')', '%', 'AC','/', '*', '%', 'AC',]

function drawElements(array) {
    for (let a = 0; a < array.length; a++) {
        createbutton(array[a])
    }
}

drawElements(value)
