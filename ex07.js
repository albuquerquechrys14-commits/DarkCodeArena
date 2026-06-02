const readline = require("readline-sync")

console.log ("============SOMA DE CINCO NÚMEROS============")
console.log("")

let primeiroNumero = readline.questionFloat('Digite o primeiro número: ')
let segundoNumero = readline.questionFloat('Digite o segundo número: ')
let terceiroNumero = readline.questionFloat('Digite o terceiro número: ')
let quartoNumero = readline.questionFloat('Digite o quarto número: ')
let quintoNumero = readline.questionFloat('Digite o quinto número: ')

console.log("===============DADOS E RESULTADOS===============")
console.log("")
console.log(`Os números digitados foram: ${primeiroNumero}, ${segundoNumero}, ${terceiroNumero}, ${quartoNumero} e ${quintoNumero}`)
console.log("")
let soma = primeiroNumero + segundoNumero + terceiroNumero + quartoNumero + quintoNumero
console.log(`A soma dos números é: ${soma}`)