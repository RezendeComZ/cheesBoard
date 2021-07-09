

const tabuleiro = document.querySelector(".tabuleiro")

function div (classHTML, content = "") {
    return `<div class=${classHTML}>${content}</div>`
}


const preto = div("preto")
const branco = div("branco")




for (let numeroLinha = 0; numeroLinha < 7; numeroLinha++) {
    // const element = array[index];
    if (tabuleiro.childElementCount % 2) {
        tabuleiro.innerHTML += `<div class="linha">${preto} ${branco}</div>`
    } else {
        tabuleiro.innerHTML += `<div class="linha">${branco} ${preto}</div>`
    }
    
}