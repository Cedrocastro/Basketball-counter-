let num1El = document.getElementById("diplay1-el")
let num2El = document.getElementById("diplay2-el")
let num = 0
let score = 0


function plus1() {
    num += 1
    num1El.textContent = num
}

function plus2() {
    num += 2
    num1El.textContent = num
}

function plus3() {
    num += 3
    num1El.textContent = num
}

function add1() {
    score += 1
    num2El.textContent = score
}

function add2() {
    score += 2
    num2El.textContent = score
}

function add3() {
    score += 3
    num2El.textContent = score
}