// Peça ao usuário para digitar 3 números inteiros.
// O programa deverá mostrar:
// Qual é o maior número digitado.


const readline = require("readline-sync")

console.log ("============MAIOR NÚMERO DIGITADO============")
console.log("")

let primeiroNumero = readline.questionInt('Digite o primeiro número inteiro: ')
let segundoNumero = readline.questionInt('Digite o segundo número inteiro: ')
let terceiroNumero = readline.questionInt('Digite o terceiro número inteiro: ')

Number.NEGATIVE_INFINITY
console.log("===============DADOS E RESULTADOS===============")
console.log("")
console.log(`Os números digitados foram: ${primeiroNumero}, ${segundoNumero} e ${terceiroNumero}`)
console.log("")

let maiorNumero = terceiroNumero

if (primeiroNumero > maiorNumero) {
    maiorNumero = primeiroNumero
    
} else if (segundoNumero > maiorNumero) {
    maiorNumero = segundoNumero
} else {
maiorNumero = terceiroNumero
}

console.log(`O maior número digitado é: ${maiorNumero}`)