const menorValor = 10
const maiorValor = 1000

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)
const elementoMenosValor = document.getElementById("menor-valor")
const elementoMaiorValor = document.getElementById("maior-valor")

elementoMenosValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor