const board = document.querySelector(".board")

function div (classHTML, content = "") {
    return `<div class=${classHTML}>${content}</div>`
}

const black = div("black")
const white = div("white")
const two = black + white
const seven = two.repeat(3) + black

for (let line = 0; line < 8; line++) {
    if (board.childElementCount % 2) {
        board.innerHTML +=  div('line', seven + white)
    } else {
        board.innerHTML += div('line', white + seven)
    }
}