// Crie um programa que peça um número inteiro e exiba a tabuada desse
// número de 1 até 10.


const readline = require('readline-sync')

console.log ("============TABUADA DO NÚMERO============")
console.log("")
let numero = readline.questionInt('Digite um numero inteiro: ')

console.log("===============DADOS E RESULTADOS===============")
console.log("")
console.log("aqui está a tabuada do seu pedido :) ")

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`)
}