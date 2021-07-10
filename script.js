const board = document.querySelector(".board")

function div (classHTML) {
    return `<div class=${classHTML}></div>`
}

for (let quadro = 0; quadro < 72; quadro++) {
    if (Number.isInteger(quadro / 9)) {
        quadro++
    } 
    if (quadro % 2) {
        board.innerHTML +=  div("white")
    } else {
        board.innerHTML += div("black")
    } 
}