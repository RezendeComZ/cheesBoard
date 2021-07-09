const tabuleiro = document.querySelector(".tabuleiro")

function div (classHTML, content = "") {
    return `<div class=${classHTML}>${content}</div>`
}

const preto = div("preto")
const branco = div("branco")
const duas = preto + branco
const sete = duas.repeat(3) + preto

for (let numeroLinha = 0; numeroLinha < 8; numeroLinha++) {
    if (tabuleiro.childElementCount % 2) {
        tabuleiro.innerHTML +=  div('linha', sete + branco)
    } else {
        tabuleiro.innerHTML += div('linha', branco + sete)
    }
}