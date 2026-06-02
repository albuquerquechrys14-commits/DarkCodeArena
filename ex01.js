const readline = require('readline-sync')


console.log ("============NUMEROS INTEIROS============")
console.log("")
let numero = readline.questionInt('Digite um numero inteiro: ')

console.log("===============DADOS E RESULTADOS===============")
console.log("")
console.log(`O numero digitado foi: ${numero}`)

if (numero > 0) {
    console.log("Número positivo")
} else if (numero < 0) {
    console.log("Número negativo")
} else {
    console.log("Zero")
}