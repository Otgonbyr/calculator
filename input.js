let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let button = document.querySelector('button')
let empty = document.querySelector('.empty')

function test() {
    empty.innerText = parseInt(input1.value) + parseInt(input2.value)
}
button.onclick = test
